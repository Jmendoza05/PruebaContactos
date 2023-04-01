import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Contacto } from 'src/app/models/contacto.model';
import { ListarContactosService } from 'src/app/service/listar-contactos.service';
@Component({
  selector: 'app-listar-contactos',
  templateUrl: './listar-contactos.component.html',
  styleUrls: ['./listar-contactos.component.css']
})
export class ListarContactosComponent implements OnInit {
  listContacto: Contacto[] = [];
  infoContacto: Contacto[] = [];
  constructor(private _contactoService: ListarContactosService,  
              private _toastr: ToastrService
              ) { }

  ngOnInit(): void {
    this.obtenerContactos();
  }
  obtenerContactos() {
    this._contactoService.getContactos().subscribe(data => {
      this.listContacto = data;      
    });
  }
  eliminarContacto(id: any){
    this._contactoService.deleteContacto(id).subscribe(data =>{
      this._toastr.success('Contacto eliminado con exito','Contacto Eliminado');
      this.obtenerContactos();
    })
  }
  viewContacto(contacto:any){
    this.infoContacto = contacto;
    console.log(contacto);
    
  }
}
