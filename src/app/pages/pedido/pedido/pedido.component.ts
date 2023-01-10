// import { ClienteClass } from './../../Dados/cliente-class';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { PedidoClass } from '../../Dados/pedido-class';

// @Component({
//   selector: 'app-pedido',
//   templateUrl: './pedido.component.html',
//   styleUrls: ['./pedido.component.css']
// })
// export class PedidoComponent implements OnInit {
//   formPedido!: FormGroup;

//   constructor(private formBuilder: FormBuilder) { }

//   ngOnInit(): void {
//     this.createForm(new PedidoClass());

//   }

//   createForm(Pedido: PedidoClass) {
//     this.formPedido = this.formBuilder.group({

//       altura: [Pedido.altura],
//       baseColeta: [Pedido.baseColeta],
//       baseOrigem: [Pedido.baseOrigem],
//       destinatario: [Pedido.destinatario],
//       destino: [Pedido.destino],
//       largura: [Pedido.largura],
//       origem: [Pedido.origem],
//       peso: [Pedido.peso],
//       profundidade: [Pedido.profundidade],
//       remetente: [Pedido.remetente],
//       status: [Pedido.status],
//       transportador: [Pedido.transportador],

//     })
//   }

//   onSubmit(){
//     console.log(this.formPedido.value);

//     this.createForm(new PedidoClass());
//   }

// }
