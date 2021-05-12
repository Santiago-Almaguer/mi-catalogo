import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../data';
import { Automovil } from '../models';
import { AutosService } from '../services/autos.service';
import { ModalAgregarEditarComponent } from '../modal-agregar-editar/modal-agregar-editar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  autos= AUTOMOVILES;
  page!: number;
  pageSize!: number;

  displayProgressBar: boolean = false;
  
  constructor(private autosService: AutosService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.displayProgressBar = true;
    this.page = 1;
    this.pageSize = 10
    this.autosService.getAutos().subscribe((response)=>{

      setTimeout(() => {
        this.displayProgressBar = false;
      this.autos = response.data;
      }, 1000);
      

    })
  }

  openModalEditar(auto: Automovil){
    const modalRef = this.modalService.open(ModalAgregarEditarComponent,{centered: true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then(

      (auto)=>{
        this.autosService.updateAutos(auto).subscribe(response=> console.log(response));
        this.ngOnInit();
      },
      (reason)=>{
        console.log(reason);
      }
    )
  }
  
  openModalAgregar(){
    const modalRef = this.modalService.open(ModalAgregarEditarComponent,{centered: true});
    
    modalRef.componentInstance.accion = 'Agregar';

    modalRef.result.then(

      (auto)=>{
        this.autosService.createAutos(auto).subscribe(response=> console.log(response));
        this.ngOnInit();
      },
      (reason)=>{
        console.log(reason);
      }
    )

  }

  openModalEliminar(auto: Automovil){
    const modalRef = this.modalService.open(ModalEliminarComponent,{centered: true});
    modalRef.componentInstance.auto = auto;

    modalRef.result.then(

      (autoTemp)=>{
        this.autosService.deleteAutos(autoTemp).subscribe(response=> console.log(response));
        this.ngOnInit();
      },
      (reason)=>{
        console.log(reason);
      }
    )

    
  }
}

