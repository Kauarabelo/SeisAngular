/*import { PedidoComponent } from './pages/pedido/pedido/pedido.component';*/
import { PagamentoComponent } from './pages/pagamento/pagamento/pagamento.component';
import { ControleComponent } from './pages/controle/controle/controle.component';
import { LoginComponent } from './pages/login/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro/cadastro.component';
import { MenuComponent } from './pages/menu/menu/menu.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { RastreioComponent } from './pages/rastreio/rastreio.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  {path: 'admin', component: MenuComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-cliente', component: ClienteComponent},
 /* {path: 'cadastro-pedido', component: PedidoComponent},*/
  {path: 'controle-pedido', component: ControleComponent},
  {path: 'pagamento', component: PagamentoComponent},
  {path: 'rastreio-cliente', component: RastreioComponent},
  {path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
