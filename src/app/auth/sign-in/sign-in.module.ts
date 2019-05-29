import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SignInComponent } from './sign-in.component';
import { RouterModule } from '@angular/router';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: SignInComponent
  }
]);

@NgModule({
  declarations: [SignInComponent],
  exports: [SignInComponent],
  imports: [
    homeRouting,
    CommonModule,
    AngularFireDatabaseModule,
  ]
})
export class SignInModule { }