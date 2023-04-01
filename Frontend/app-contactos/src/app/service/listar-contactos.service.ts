import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarContactosService {
  url = 'http://localhost:3000/api/contactos';
  constructor(private http: HttpClient) { }
  getContactos(): Observable<any> {
    return this.http.get(this.url+`/findAllContactos`)
  }
  getContacto(id:any){
    return this.http.get(this.url+`/findByIdContacto/`+id)
  }
  deleteContacto(id:any): Observable<any>{
    return this.http.delete(this.url+`/removeContacto/`+id)
  }
}
