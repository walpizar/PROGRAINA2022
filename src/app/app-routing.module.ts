import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/personajes/personajes.module').then(m => m.PersonajesModule) }, 
  { path: 'personajes', loadChildren: () => import('./pages/personajes/personajes.module').then(m => m.PersonajesModule) }, 
{ path: 'locaciones', loadChildren: () => import('./pages/locaciones/locaciones.module').then(m => m.LocacionesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
