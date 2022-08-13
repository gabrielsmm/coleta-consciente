import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComunsModule } from './../comuns/comuns.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComunsModule
  ],
  exports: [

  ],
  providers: [],
  entryComponents: []
})
export class ViewsModule { }
