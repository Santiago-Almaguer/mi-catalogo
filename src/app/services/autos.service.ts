import { Injectable } from '@angular/core';
import { Automovil } from '../models';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutosService {
private autosURL = ' https://catalogo-autos-nodejs.herokuapp.com/api/autos/limit/10';
  constructor(private http: HttpClient) { }

  getAutos(): Observable<any>{
    return this.http.get<any>(this.autosURL)
  }
}
