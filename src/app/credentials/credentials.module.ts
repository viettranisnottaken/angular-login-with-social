import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { CredentialsComponent } from './credentials.component';
import { appInitializer } from '../app-initializer';
import { AuthService } from './auth.service';

const routes: Routes = [
  // { path: '', component: CredentialsComponent },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  declarations: [CredentialsComponent, LoginComponent, SignupComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: appInitializer,
    //   multi: true,
    //   deps: [AuthService],
    // },
  ],
})
export class CredentialsModule {}
