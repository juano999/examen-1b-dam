import { Message } from './../../services/chat.service';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import  { CallbackID, Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/core';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  coordinate: any;
  watchCoordinate: any;
  watchId: any;

  messages: Observable<Message[]>;
  newMsg = '';
  public archives: any = []

  constructor(private chatService: ChatService, 
    private router: Router,
    private zone: NgZone) { }

  ngOnInit() {
    this.messages = this.chatService.getChatMessages();
    // console.log("mess", this.messages)
  }

  sendMessage(isFile: boolean) {
    this.chatService.addChatMessage(this.newMsg, isFile, '').then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }

  signOut() {
    this.chatService.signOut().then(() => {
      this.router.navigateByUrl('/', { replaceUrl: true });
    });
  }

  async uploadFile(event: any) {
    const path = 'Archivos';
    const name = event.target.files[0].name;
    const file = event.target.files[0];
    const res = await this.chatService.uploadFile(file, path, name);
    this.archives = res;
    console.log("resUploadFile", res)
    this.chatService.addChatMessage(name, true, res).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }

  async requestPermissions() {
    const permResult = await Geolocation.requestPermissions();
    console.log('Perm request result: ', permResult);
  }

  getCurrentCoordinate() {
    let result
    if (!Capacitor.isPluginAvailable('Geolocation')) {
      console.log('Plugin geolocation not available');
      return;
    }
    Geolocation.getCurrentPosition().then(data => {
      this.coordinate = {
        latitude: data.coords.latitude,
        longitude: data.coords.longitude,
        accuracy: data.coords.accuracy
      };
       result = "Mi ubicacion es: " + "Lat: " + data.coords.latitude + " " + "Long: " + data.coords.longitude 
       console.log(result)

       this.chatService.addChatMessage(result, false, '').then(() => {
            this.newMsg = '';
            this.content.scrollToBottom();
          });
    }).catch(err => {
      console.error(err);
    });    
  }

  // sendLocation() {  

  //   this.chatService.addChatMessage(position, false, '').then(() => {
  //     this.newMsg = '';
  //     this.content.scrollToBottom();
  //   });
  // }

}

