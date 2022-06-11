import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componente/inicio/inicio.component';
import { FormularioComponent } from './componente/formulario/formulario.component';
import { CalculadoraComponent } from './componente/calculadora/calculadora.component';
import { PresentacionComponent } from './componente/presentacion/presentacion.component';

const routes: Routes = [
  {path:'calculadora', component: CalculadoraComponent},
  {path:'formulario', component: FormularioComponent},
  {path:'inicio', component: InicioComponent},
  {path:'presentacion', component: PresentacionComponent },
  {path: '', component: InicioComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
