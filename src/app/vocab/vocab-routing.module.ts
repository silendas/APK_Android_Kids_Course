import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VocabPage } from './vocab.page';

const routes: Routes = [
  {
    path: '',
    component: VocabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VocabPageRoutingModule {}
