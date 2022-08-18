import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { ComunsModule } from './../comuns/comuns.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComunsModule,
    NgbCarouselModule
  ],
  exports: [

  ],
  providers: [],
  entryComponents: []
})
export class ViewsModule { }
