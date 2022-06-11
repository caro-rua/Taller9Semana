import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraComponent } from './componente/barra/barra.component';
import { FormularioComponent } from './componente/formulario/formulario.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { CalculadoraComponent } from './componente/calculadora/calculadora.component';
import { PresentacionComponent } from './componente/presentacion/presentacion.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';







@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    FormularioComponent,
    InicioComponent,
    CalculadoraComponent,
    PresentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
     MatFormFieldModule,
     MatProgressBarModule
     
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
