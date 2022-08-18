import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OQueColetamosComponent } from './o-que-coletamos.component';

const routes: Routes = [
  {path : '', component : OQueColetamosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OQueColetamosRoutingModule { }
