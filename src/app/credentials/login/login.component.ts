import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { EMPTY, from, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { AuthService } from '../auth.service';

declare const FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  loginWithFacebook() {
    this.authService.loginWithFacebook();
    // return from(new Promise<any>((resolve) => FB.login(resolve))).pipe(
    //   concatMap(({ authResponse }) => {
    //     if (!authResponse) return EMPTY;
    //     return of(authResponse.accessToken);
    //   })
    // );
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logout();
  }

  logUser() {
    console.log('user', this.user);
  }
}
