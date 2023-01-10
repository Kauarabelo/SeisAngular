import { PagamentoComponent } from './pages/pagamento/pagamento/pagamento.component';
import { ControleComponent } from './pages/controle/controle/controle.component';
import { PedidoComponent } from './pages/pedido/pedido/pedido.component';
import { LoginComponent } from './pages/login/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro/cadastro.component';
import { MenuComponent } from './pages/menu/menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';

const routes: Routes = [

  {path: '', component: MenuComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro-cliente', component: ClienteComponent},
  {path: 'cadastro-pedido', component: PedidoComponent},
  {path: 'controle-pedido', component: ControleComponent},
  {path: 'pagamento', component: PagamentoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
