import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VocabPageRoutingModule } from './vocab-routing.module';

import { VocabPage } from './vocab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VocabPageRoutingModule
  ],
  declarations: [VocabPage]
})
export class VocabPageModule {}
