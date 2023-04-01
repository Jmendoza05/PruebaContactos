import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Contacto } from '../models/contacto.model';

@Injectable({
  providedIn: 'root'
})
export class CrearContactoService {
  url = 'http://localhost:3000/api/contactos';
  constructor(private http: HttpClient) { }
  saveContacto(contacto: Contacto): Observable<any> {
    return this.http.post(this.url +`/saveContacto`, contacto);
  }
  obtenerContacto(id: string): Observable<any> {
    return this.http.get(this.url +`/findByIdContacto/` + id);
  }
  editarContacto(id: string, contacto: Contacto): Observable<any> {
    return this.http.put(this.url +`/findAndUpdateContacto/` + id, contacto);
  }
}
