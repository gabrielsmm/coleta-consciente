import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';

import { ComunsModule } from './../comuns/comuns.module';
import { HomeComponent } from './home/home.component';
import { OQueColetamosComponent } from './o-que-coletamos/o-que-coletamos.component';
import { SolicitaColetaComponent } from './solicita-coleta/solicita-coleta.component';

@NgModule({
  declarations: [
    HomeComponent,
    OQueColetamosComponent,
    SolicitaColetaComponent
  ],
  imports: [
    CommonModule,
    ComunsModule,
    NgbCarouselModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [

  ],
  providers: [],
  entryComponents: []
})
export class ViewsModule { }
