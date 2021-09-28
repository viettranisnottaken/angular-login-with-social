import { Injectable, OnInit } from '@angular/core';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  authState: Observable<SocialUser>;

  constructor(private socialAuthService: SocialAuthService) {
    this.authState = this.socialAuthService.authState;
  }

  ngOnInit(): void {
    this.authState.subscribe((v) => {
      console.log('authState', v);
    });
  }

  loginWithFacebook(options?: any) {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  loginWithGoogle(options?: any) {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logout() {
    this.socialAuthService.signOut();
  }
}
