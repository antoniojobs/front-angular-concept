import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ClientesFormComponent } from "./clientes/clientes-form/clientes-form.component";

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'clientes-form',component:ClientesFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
