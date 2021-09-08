import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PosudbaPage } from './posudba.page';

const routes: Routes = [
  {
    path: '',
    component: PosudbaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PosudbaPageRoutingModule {}
