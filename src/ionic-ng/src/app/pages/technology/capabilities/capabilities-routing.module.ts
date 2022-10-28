import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapabilitiesPage } from './capabilities.page';

const routes: Routes = [
  {
    path: '',
    component: CapabilitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapabilitiesPageRoutingModule {}
