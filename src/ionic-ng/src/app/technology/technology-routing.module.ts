import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechnologyPage } from './technology.page';

const routes: Routes = [
  {
    path: '',
    component: TechnologyPage
  },
  {
    path: 'channels',
    loadChildren: () => import('./channels/channels.module').then( m => m.ChannelsPageModule)
  },
  {
    path: 'experiences',
    loadChildren: () => import('./experiences/experiences.module').then( m => m.ExperiencesPageModule)
  },
  {
    path: 'capabilities',
    loadChildren: () => import('./capabilities/capabilities.module').then( m => m.CapabilitiesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnologyPageRoutingModule {}
