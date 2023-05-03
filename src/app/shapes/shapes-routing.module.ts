import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShapesPage } from './shapes.page';

const routes: Routes = [
  {
    path: '',
    component: ShapesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShapesPageRoutingModule {}
