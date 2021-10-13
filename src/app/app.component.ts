import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FacebookLoginProvider,
  SocialAuthService,
} from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'login-with-social';

  constructor(private router: Router) {}

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
