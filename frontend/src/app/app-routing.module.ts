import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'inicio', loadChildren: () => import('./components/views/home/home.module').then(m => m.HomeModule)},
  {path: 'o-que-coletamos', loadChildren: () => import('./components/views/o-que-coletamos/o-que-coletamos.module').then(m => m.OQueColetamosModule)},
  {path: 'solicita-coleta', loadChildren: () => import('./components/views/solicita-coleta/solicita-coleta.module').then(m => m.SolicitaColetaModule)},
  {path: '**', loadChildren: () => import('./components/views/home/home.module').then(m => m.HomeModule)},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
