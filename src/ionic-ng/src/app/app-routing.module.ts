import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'people',
    loadChildren: () => import('./pages/people/people.module').then( m => m.PeoplePageModule)
  },
  {
    path: 'process',
    loadChildren: () => import('./pages/process/process.module').then( m => m.ProcessPageModule)
  },
  {
    path: 'value',
    loadChildren: () => import('./pages/value/value.module').then( m => m.ValuePageModule)
  },
  {
    path: 'technology',
    loadChildren: () => import('./pages/technology/technology.module').then( m => m.TechnologyPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
