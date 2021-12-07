import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  userEmail = new FormControl('');

  credentialForm: FormGroup;

  constructor(private chatService: ChatService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.credentialForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  signOut() {
    this.chatService.signOut().then(() => {
      this.router.navigateByUrl('/', { replaceUrl: true });
    });
  }
  
  async onReset() {
    try {
      const email = this.userEmail.value;
      await this.chatService.resetPassword(email);
      window.alert('Email sent, check your inbox!');
    } catch (error) {
      console.log(error);
    }
  }

}
