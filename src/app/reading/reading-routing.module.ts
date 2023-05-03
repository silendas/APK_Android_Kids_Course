import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadingPage } from './reading.page';

const routes: Routes = [
  {
    path: '',
    component: ReadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadingPageRoutingModule {}
