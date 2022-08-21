import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { ComunsModule } from '../../comuns/comuns.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComunsModule,
    NgbCarouselModule,
    HomeRoutingModule
  ],
  exports: [

  ],
  providers: [],
  entryComponents: []
})
export class HomeModule { }
