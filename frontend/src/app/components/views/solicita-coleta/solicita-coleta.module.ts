import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    NgxMaskModule.forRoot()
  ],
  exports: [

  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  entryComponents: []
})
export class SolicitaColetaModule { }
