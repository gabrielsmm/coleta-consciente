import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'inicio', loadChildren: () => import('./components/views/home/home-routing.module').then(m => m.HomeRoutingModule)},
  {path: '**', loadChildren: () => import('./components/views/home/home-routing.module').then(m => m.HomeRoutingModule)},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
