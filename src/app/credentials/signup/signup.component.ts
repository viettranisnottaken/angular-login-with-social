import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private socialAuthService: SocialAuthService) {}

  ngOnInit(): void {}

  signup() {
    console.log('signup');
  }
}
