import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contacto } from 'src/app/models/contacto.model';
import { CrearContactoService } from 'src/app/service/crear-contacto.service';
@Component({
  selector: 'app-crear-contacto',
  templateUrl: './crear-contacto.component.html',
  styleUrls: ['./crear-contacto.component.css']
})
export class CrearContactoComponent implements OnInit {
  contactoForm: FormGroup;
  titulo ='Crear Contacto'
  tituloButton = 'Crear';
  id: string | null;
  constructor(private fb: FormBuilder,
    private router: Router,
    private _toastr: ToastrService,
    private _contactoService: CrearContactoService,
    private aRouter: ActivatedRoute) { 
      this.contactoForm = this.fb.group({
        nombre: ['', Validators.required],
        apellidos: ['', Validators.required],
        email: ['', Validators.required],
      celular: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      direcccion: ['', Validators.required],
      tipoDeContacto: ['', Validators.required],
      origen: ['', Validators.required],
      });
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }
  saveContacto() {
    const CONTACTO: Contacto = {
      nombre: this.contactoForm.get('nombre')?.value,
      apellidos: this.contactoForm.get('apellidos')?.value,
      email: this.contactoForm.get('email')?.value,
      celular: this.contactoForm.get('celular')?.value ,
      fechaNacimiento: this.contactoForm.get('fechaNacimiento')?.value,
      direcccion: this.contactoForm.get('direcccion')?.value,
      tipoDeContacto: this.contactoForm.get('tipoDeContacto')?.value,
      origen: this.contactoForm.get('origen')?.value,
    }
    if (this.id !== null) {
      this._contactoService.editarContacto(this.id, CONTACTO).subscribe(data => {
        this._toastr.success("Contacto actualizado exitosamente","Contacto Actualizado")
        this.router.navigate(['/']);
      })
    } else {
      this._contactoService.saveContacto(CONTACTO).subscribe(data => {        
        this._toastr.success("Contacto creado exitosamente","Contacto Creado")        
        this.router.navigate(['/']);
      },(error)=>{
        this._toastr.error(error.error,'Contacto Exixtente')
        this.contactoForm.reset();
      })
    }

  }
  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Contacto';
      this.tituloButton = 'Editar';
      this._contactoService.obtenerContacto(this.id).subscribe(data => {
        this.contactoForm.setValue({
          nombre: data.nombre,
          apellidos: data.apellidos,
          email: data.email,
          celular: data.celular,
          fechaNacimiento: data.fechaNacimiento,
          direcccion: data.direcccion,
          tipoDeContacto: data.tipoDeContacto,
          origen: data.origen
        })
      })
    }
  }
}
