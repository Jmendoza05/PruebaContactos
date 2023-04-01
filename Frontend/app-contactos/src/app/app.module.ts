import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarContactosComponent } from './component/listar-contactos/listar-contactos.component';
import { CrearContactoComponent } from './component/crear-contacto/crear-contacto.component';
import { ModalInfoComponent } from './component/listar-contactos/modal-info/modal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarContactosComponent,
    CrearContactoComponent,
    ModalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
