import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPersonajeComponent } from './componentes/listar-personaje/listar-personaje.component';

const routes: Routes = [
  {path:'', component: ListarPersonajeComponent},
  {path:'', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
