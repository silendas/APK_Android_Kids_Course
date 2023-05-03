import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumbersPageRoutingModule } from './numbers-routing.module';

import { NumbersPage } from './numbers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumbersPageRoutingModule
  ],
  declarations: [NumbersPage]
})
export class NumbersPageModule {}
