import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValuePage } from './value.page';

const routes: Routes = [
  {
    path: '',
    component: ValuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValuePageRoutingModule {}
