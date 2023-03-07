import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocacionesComponent } from './locaciones.component';

const routes: Routes = [{ path: 'lista', component: LocacionesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocacionesRoutingModule { }
