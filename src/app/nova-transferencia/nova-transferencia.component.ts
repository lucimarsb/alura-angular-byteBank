import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService){}

  transferir() {
    console.log('Solicitada nova transferência');
    //if(this.ehValido()){

      const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
      this.service.adicionar(valorEmitir).subscribe(resultado => {
        console.log(resultado);
        this.limparCampos();
      },
      (error) => console.error(error)
    );
    //}
  }

  private ehValido(){
    const valido = this.valor > 0;
    if(!valido){
      this.valoresComErro.emit('Informe um valor Válido');
    }
    return valido;
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
