import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistrarComponent} from "./components/registrar/registrar.component";
import {CarteiraComponent} from "./components/carteira/carteira.component";
import {TransferirComponent} from "./components/transferir/transferir.component";

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrarComponent },
  { path: 'lista-pilas', component: CarteiraComponent },
  { path: 'transferir', component: TransferirComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
