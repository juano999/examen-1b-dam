import { Message } from './../../services/chat.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

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
    ) { }

  ngOnInit() {
    this.messages = this.chatService.getChatMessages();
  }

  sendMessage() {
    this.chatService.addChatMessage(this.newMsg).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }

  signOut() {
    this.chatService.signOut().then(() => {
      this.router.navigateByUrl('/', { replaceUrl: true });
    });
  }

  async uploadFile(event: any){
    const path = 'Archivos';
    const name= event.target.files[0].name;
    const file = event.target.files[0];
    const res = await this.chatService.uploadFile(file, path, name);
    this.archives = res;
    this.chatService.addChatMessage(name).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }

  //style="display:none"

  fileShared(){
    
  }

}
