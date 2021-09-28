import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { environment } from 'src/environments/environment';
import { appInitializer } from './app-initializer';
import { AuthService } from './credentials/auth.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./credentials/credentials.module').then(
        (m) => m.CredentialsModule
      ),
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(environment.fbAppId),
          },
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.ggAppId),
          },
          // {
          //   provide: APP_INITIALIZER,
          //   useFactory: appInitializer,
          //   multi: true,
          //   deps: [AuthService],
          // },
        ],
      } as SocialAuthServiceConfig,
    },
    SocialAuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
