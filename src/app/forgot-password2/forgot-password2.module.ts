import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPassword2PageRoutingModule } from './forgot-password2-routing.module';

import { ForgotPassword2Page } from './forgot-password2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPassword2PageRoutingModule
  ],
  declarations: [ForgotPassword2Page]
})
export class ForgotPassword2PageModule {}
