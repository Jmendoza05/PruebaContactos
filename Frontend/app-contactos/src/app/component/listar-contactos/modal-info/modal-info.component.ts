import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/models/contacto.model';
import { ListarContactosService } from 'src/app/service/listar-contactos.service';
@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent implements OnInit {
  id: string | null;
  infoContact: any = [];
  constructor(private aRouter: ActivatedRoute,private _contactoService: ListarContactosService) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.findInfoContacto(this.id);
  }
  findInfoContacto(id:any){
    this._contactoService.getContacto(id).subscribe(data =>{
      this.infoContact = data;
    })
    
  }

}
