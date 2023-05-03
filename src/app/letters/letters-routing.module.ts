import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LettersPage } from './letters.page';

const routes: Routes = [
  {
    path: '',
    component: LettersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LettersPageRoutingModule {}
