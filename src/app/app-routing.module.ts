import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaminitoContactComponent } from './caminito-contact/caminito-contact.component';
import { CaminitoEmpanadasComponent } from './caminito-empanadas/caminito-empanadas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'empanadas',
    pathMatch: 'full'
  },
  {
    path: 'empanadas',
    component: CaminitoEmpanadasComponent
  },
  {
    path: 'contact',
    component: CaminitoContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
