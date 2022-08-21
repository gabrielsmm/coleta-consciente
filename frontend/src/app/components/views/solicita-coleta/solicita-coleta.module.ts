import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { ComunsModule } from './../../comuns/comuns.module';
import { SolicitaColetaRoutingModule } from './solicita-coleta-routing.module';
import { SolicitaColetaComponent } from './solicita-coleta.component';


@NgModule({
  declarations: [
    SolicitaColetaComponent
  ],
  imports: [
    CommonModule,
    ComunsModule,
    FormsModule,
    SolicitaColetaRoutingModule,
    NgxMaskModule.forRoot()
  ],
  exports: [

  ],
  providers: [],
  entryComponents: []
})
export class SolicitaColetaModule { }
