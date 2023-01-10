import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ClienteClass } from './cliente-class';
import { HttpClient} from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  formCliente!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.createForm(new ClienteClass());
  }

  createForm(cliente: ClienteClass) {
    this.formCliente = this.formBuilder.group({

      email: [cliente.email],
      nome: [cliente.nome],
      cpf: [cliente.cpf],
      cidade: [cliente.cidade],
      cep: [cliente.cep],
      telefone: [cliente.telefone],
      uf: [cliente.uf],
      altura: [cliente.altura],
      baseColeta: [cliente.baseColeta],
      baseOrigem: [cliente.baseOrigem],
      destinatario: [cliente.destinatario],
      destino: [cliente.destino],
      largura: [cliente.largura],
      origem: [cliente.origem],
      peso: [cliente.peso],
      profundidade: [cliente.profundidade],
      remetente: [cliente.remetente],
      status: [cliente.status],
      transportador: [cliente.transportador],

    })
  }

  onSubmit() {
    // manda as informações ao console
    console.log(this.formCliente.value);
    // axios.post("http://localhost:8080/cliente/add", this.formCliente.value).then(result => { console.log(result); })
    return this.http.post("http://localhost:8080/cliente/add" ,this.formCliente.value)
    this.createForm(new ClienteClass());


    // Faz o navegamento
    this.router.navigateByUrl('/pagamento');
  }

}
