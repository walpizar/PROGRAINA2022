import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocacionesRoutingModule } from './locaciones-routing.module';
import { LocacionesComponent } from './locaciones.component';


@NgModule({
  declarations: [
    LocacionesComponent
  ],
  imports: [
    CommonModule,
    LocacionesRoutingModule
  ]
})
export class LocacionesModule { }
