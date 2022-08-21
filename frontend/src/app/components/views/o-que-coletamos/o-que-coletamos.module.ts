import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComunsModule } from '../../comuns/comuns.module';
import { OQueColetamosRoutingModule } from './o-que-coletamos-routing.module';
import { OQueColetamosComponent } from './o-que-coletamos.component';


@NgModule({
  declarations: [
    OQueColetamosComponent
  ],
  imports: [
    CommonModule,
    ComunsModule,
    OQueColetamosRoutingModule
  ],
  exports: [

  ],
  providers: [],
  entryComponents: []
})
export class OQueColetamosModule { }
