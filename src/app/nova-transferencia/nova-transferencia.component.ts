import { Component, EventEmitter, Output } from '@angular/core';

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

  transferir() {
    console.log('Solicitada nova transferência');
    //if(this.ehValido()){

      const valorEmitir = {valor: this.valor, destino: this.destino};
      this.aoTransferir.emit(valorEmitir);
      this.limparCampos();
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
