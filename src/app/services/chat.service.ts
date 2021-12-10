import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';


//Interfaz para la Autenticación de Usuario 
export interface UserAuth {
  uid: string;
  email: string;
}


//Interfaz para un Usuario en la Base de Datos
export interface User {
  uid: string;
  username: string;
  email: string;
}

//Interfaz para un Mensaje
export interface Message {
  createdAt: firebase.firestore.FieldValue;
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
  isFile: boolean;
  myUsername: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  storageName: String
  currentUser: UserAuth = null;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore,
    public storage: AngularFireStorage) {
    this.afAuth.onAuthStateChanged(user => {
      console.log('Changed: ', user);
      this.currentUser = user;
    });
  }

  //Registrarse con email, contraseña y nombre de usuario
  async signUp({ email, username, password }) {
    const credential = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    console.log('result: ', credential);
    const uid = credential.user.uid;

    return this.afs.doc(
      `users/${uid}`
    ).set({
      uid,
      email: credential.user.email,
      username: username,
    });
  }

  //Inicio de Sesión con un email y contraseña
  signIn({ email, password }) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  //Salir de la sesión
  signOut() {
    return this.afAuth.signOut();
  }

  //Se añade un mensaje a la base de datos de FireStore
  // con un mensaje, si es o no de tipo "File" y la url en caso de ser de tipo "File"
  addChatMessage(msg, isFile, url) {
    return this.afs.collection('messages').add({
      msg,
      from: this.currentUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      isFile: isFile,
      url: url
    });
  }

  //Se obtiene todos los mensajes desde la base de datos Firestore
  getChatMessages() {
    let users = [];

    return this.getUsers().pipe(
      switchMap(res => {
        users = res;
        console.log('all users: ', users);
        return this.afs.collection('messages', ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id' }) as Observable<Message[]>
      }),
      map(messages => {
        for (let m of messages) {
          m.fromName = this.getUserForMsg(m.from, users);
          m.myMsg = this.currentUser.uid === m.from;
          //m.myUsername = this.afs.collection('users').valueChanges(m.from) as 
        }
        console.log('all messages: ', messages);

        return messages;
      })
    )
  }

  // Se obtiene los usuarios desde la base de Datos de Firestore
  getUsers() {
    return this.afs.collection('users').valueChanges({ idField: 'uid' }) as Observable<User[]>;
  }

  //Se obtiene el nombre de Usuario con el que un usuario se registro
  getUserForMsg(msgFromId, users: User[]): string {
    for (let usr of users) {
      if (usr.uid == msgFromId) {
        return usr.username;
      }
    }
    return 'Deleted';
  }

  //Sube un  archivo al Storage de Firebase
  uploadFile(file: any, path: string, nombre: string): Promise<string> {
    return new Promise(resolve => {
      const filePath = path + '/' + nombre;
      const ref = this.storage.ref(filePath);
      const task = ref.put(file);
      task.snapshotChanges().pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(res => {
            const downloadURL = res;
            resolve(downloadURL);
            return;
          });
        })
      )
        .subscribe();
    })
  }

  // Realiza el proceso de cambio de Contraseña
  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }
}
