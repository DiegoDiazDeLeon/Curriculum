import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from 'src/app/componentes/inicio/inicio.component';
import { ProyectosComponent } from 'src/app/componentes/proyectos/proyectos.component';

const routes: Routes = [
  {path: 'Inicio',component:InicioComponent},
  {path: '',component:InicioComponent},

  {path: 'Proyectos',component:ProyectosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
