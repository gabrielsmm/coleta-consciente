import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SolicitaColetaComponent } from './solicita-coleta.component';

const routes: Routes = [
  {path : '', component : SolicitaColetaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitaColetaRoutingModule { }
