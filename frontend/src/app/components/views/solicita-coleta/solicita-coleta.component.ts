import { Coleta } from './../../../models/Coleta.model';
import { AppService } from './../../../app.service';
import { ValidaCepService } from './../../../services/validaCep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicita-coleta',
  templateUrl: './solicita-coleta.component.html',
  styleUrls: ['./solicita-coleta.component.css']
})
export class SolicitaColetaComponent implements OnInit {

  public coleta: Coleta = new Coleta();
  public isQuantidadeValida = false;
  public isCepValido = false;

  constructor(private validaCepService: ValidaCepService,
    public appService: AppService) { }

  ngOnInit(): void {
  }

  solicitaColeta() {
    console.log('Solicitando coleta...');
    if (this.coleta.quantidade < 10 || this.appService.isNullOrUndefined(this.coleta.quantidade)) {
      this.isQuantidadeValida = true;
      return;
    } else {
      this.isQuantidadeValida = false;
    }
    if (!this.isCepValido) {
      this.coleta.cep = ' ';
      return;
    }
  }

  validarCEP(cep: any) {
    if (cep.length === 8) {
      this.validaCepService.validarCep(cep).subscribe({
        next: (data) => {
          if (data.erro) {
            this.isCepValido = false;
            this.coleta.estado = "";
            this.coleta.cidade = "";
            this.coleta.bairro = "";
            this.coleta.rua = "";
            this.coleta.complemento = "";
          } else {
            this.isCepValido = true;
            this.coleta.estado = data.uf;
            this.coleta.cidade = data.localidade;
            this.coleta.bairro = data.bairro;
            this.coleta.rua = data.logradouro;
            this.coleta.complemento = data.complemento;
          }
        },
        error: (err) => {

        },
        complete: () => {

        }
      })
    }
  }

}
