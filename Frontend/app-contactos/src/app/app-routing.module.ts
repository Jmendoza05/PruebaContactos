import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearContactoComponent } from './component/crear-contacto/crear-contacto.component';
import { ListarContactosComponent } from './component/listar-contactos/listar-contactos.component';
import { ModalInfoComponent } from './component/listar-contactos/modal-info/modal-info.component';

const routes: Routes = [
  {path: 'list-contact', component: ListarContactosComponent},  
  {path: 'create-contact', component: CrearContactoComponent},
  {path: 'editar-contact/:id',component: CrearContactoComponent},
  {path: 'viewContact/:id', component: ModalInfoComponent},
  {path: '', component: ListarContactosComponent},
  {path: '**',redirectTo:'',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
