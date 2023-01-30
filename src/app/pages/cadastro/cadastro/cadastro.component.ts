import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CadastroClass } from './cadastro-class';
import { HttpClient} from '@angular/common/http';

CadastroClass

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formCadastro!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.createForm(new CadastroClass());
  }

  createForm(cadastro: CadastroClass) {
    console.log('Dados-antes',cadastro)
    this.formCadastro = this.formBuilder.group({
      nome: [cadastro.nome],
      cpf: [cadastro.cpf],
      cidade: [cadastro.cidade],
      uf: [cadastro.uf],
      telefone: [cadastro.telefone],
      email: [cadastro.email],
      senha: [cadastro.senha],
      confsenha: [cadastro.confSenha],

    })
  }

  onSubmit() {
    // manda as informações ao console
    console.log('Dados',this.formCadastro.value);
    // axios.post("http://localhost:8080/cadastro/add", this.formcadastro.value).then(result => { console.log(result); })
    return this.http.post("http://localhost:8080/cadastro/add" ,this.formCadastro.value)
    this.createForm(new CadastroClass());


    // Faz o navegamento
    this.router.navigateByUrl('/pagamento');
  }

}
