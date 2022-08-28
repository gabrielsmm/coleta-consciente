import { Component, OnInit } from '@angular/core';

import { AppService } from './../../../app.service';
import { Coleta } from './../../../models/Coleta.model';
import { ColetaService } from './../../../services/coleta.service';
import { ValidaCepService } from './../../../services/validaCep.service';

export enum State {
  StateDados = 1,
  StateEnviado = 2
}

@Component({
  selector: 'app-solicita-coleta',
  templateUrl: './solicita-coleta.component.html',
  styleUrls: ['./solicita-coleta.component.css']
})
export class SolicitaColetaComponent implements OnInit {

  public coleta: Coleta = new Coleta();
  public isQuantidadeValida = true;
  public isCepValido = false;
  public isComplementoValido = true;
  public state = State;
  public stateChange = State.StateDados;

  constructor(private validaCepService: ValidaCepService,
    public appService: AppService,
    private coletaService: ColetaService) { }

  ngOnInit(): void {
  }

  solicitaColeta() {
    console.log('Solicitando coleta...');
    if (this.coleta.quantidade < 10 || this.appService.isNullOrUndefined(this.coleta.quantidade)) {
      this.isQuantidadeValida = false;
      return;
    } else {
      this.isQuantidadeValida = true;
    }
    if (!this.isCepValido) {
      this.coleta.cep = ' ';
      return;
    }
    if (this.appService.isNullOrUndefined(this.coleta.complemento) || this.coleta.complemento == '') {
      this.isComplementoValido = false;
      return;
    } else {
      this.isComplementoValido = true;
    }
    this.coletaService.create(this.coleta).subscribe({
      next: (data) => {
        this.clearColeta();
        this.coleta.quantidade = 0;
        this.coleta.cep = "";
        this.stateChange = State.StateEnviado;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {

      }
    })
  }

  validarCEP(cep: any) {
    if (cep.length === 8) {
      this.validaCepService.validarCep(cep).subscribe({
        next: (data) => {
          if (data.erro) {
            this.isCepValido = false;
            this.clearColeta();
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
    } else if (cep.length <= 0) {
      this.coleta.estado = "";
      this.coleta.cidade = "";
      this.coleta.bairro = "";
      this.coleta.rua = "";
      this.coleta.complemento = "";
    }
  }

  voltarClick() {
    this.stateChange = State.StateDados;
  }

  private clearColeta() {
    this.coleta.estado = "";
    this.coleta.cidade = "";
    this.coleta.bairro = "";
    this.coleta.rua = "";
    this.coleta.complemento = "";
  }

}
