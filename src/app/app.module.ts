import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './pages/cadastro/cadastro/cadastro.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ControleComponent } from './pages/controle/controle/controle.component';
import { LoginComponent } from './pages/login/login/login.component';
import { MenuComponent } from './pages/menu/menu/menu.component';
import { PagamentoComponent } from './pages/pagamento/pagamento/pagamento.component';
// import { PedidoComponent } from './pages/pedido/pedido/pedido.component';
import { NavbarComponent } from './pages/sharepage/navbar/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ClienteComponent,
    ControleComponent,
    LoginComponent,
    MenuComponent,
    PagamentoComponent,
    // PedidoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
