import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import{ NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-agregar-editar',
  templateUrl: './modal-agregar-editar.component.html',
  styleUrls: ['./modal-agregar-editar.component.css']
})
export class ModalAgregarEditarComponent implements OnInit {
  accion: string = '';
  auto: Automovil = {} as Automovil;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  

value(){
  var selectModelos =   <HTMLInputElement> document.getElementById('Modelos');
  console.log(selectModelos.value);
}

  onSubmit(){
    this.activeModal.close(this.auto);
  }



}
