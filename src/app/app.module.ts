import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpanadasListComponent } from './empanadas-list/empanadas-list.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CaminitoContactComponent } from './caminito-contact/caminito-contact.component';
import { CartComponent } from './cart/cart.component';
import { CaminitoEmpanadasComponent } from './caminito-empanadas/caminito-empanadas.component';
import { InputNumberComponent } from './input-number/input-number.component'

@NgModule({
  declarations: [
    AppComponent,
    EmpanadasListComponent,
    CaminitoContactComponent,
    CartComponent,
    CaminitoEmpanadasComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
