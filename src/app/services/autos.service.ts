import { Injectable } from '@angular/core';
import { Automovil } from '../models';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutosService {
private autosURL = ' https://catalogo-autos-nodejs.herokuapp.com/api/autos/limit/50';
private autosActionURL = ' https://catalogo-autos-nodejs.herokuapp.com/api/autos';
  constructor(private http: HttpClient) { }

  getAutos(): Observable<any>{
    return this.http.get<any>(this.autosURL)
  }

  updateAutos(auto: Automovil): Observable<any>{
    return this.http.put<any>(`${this.autosActionURL}/${auto._id}`, auto);

  }

  deleteAutos(auto: Automovil): Observable<any>{
    return this.http.delete<any>(`${this.autosActionURL}/${auto._id}`);

  }

  createAutos(auto: Automovil): Observable<any>{
    return this.http.post<any>(`${this.autosActionURL}`, auto);

  }


}