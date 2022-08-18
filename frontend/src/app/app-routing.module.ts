import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'inicio', loadChildren: () => import('./components/views/home/home-routing.module').then(m => m.HomeRoutingModule)},
  {path: 'o-que-coletamos', loadChildren: () => import('./components/views/o-que-coletamos/o-que-coletamos-routing.module').then(m => m.OQueColetamosRoutingModule)},
  {path: 'solicita-coleta', loadChildren: () => import('./components/views/solicita-coleta/solicita-coleta-routing.module').then(m => m.SolicitaColetaRoutingModule)},
  {path: '**', loadChildren: () => import('./components/views/home/home-routing.module').then(m => m.HomeRoutingModule)},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
