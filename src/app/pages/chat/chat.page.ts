import { Message } from './../../services/chat.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActionSheetController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { UserPhoto, PhotoService } from '../../services/photo.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  messages: Observable<Message[]>;
  newMsg = '';
  public archives: any = []

  constructor(private chatService: ChatService, private router: Router,
    public photoService: PhotoService, public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
    this.messages = this.chatService.getChatMessages();
    this.photoService.loadSaved();
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

  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
         }
      }]
    });
    await actionSheet.present();
  }

}

