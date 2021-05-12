import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VistasComponent } from './vistas/vistas.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ModalAgregarEditarComponent } from './modal-agregar-editar/modal-agregar-editar.component';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { FormatoModelosPipe } from './pipes/formato-modelos.pipe';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListComponent,
    TableComponent,
    PageNotFoundComponent,
    ModalAgregarEditarComponent,
    ModalEliminarComponent,
    FormatoModelosPipe,
    LogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ModalAgregarEditarComponent, ModalEliminarComponent]
})
export class AppModule { }
