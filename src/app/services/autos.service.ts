import { Injectable } from '@angular/core';
import { Automovil } from '../models';
import{HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import{catchError, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AutosService {
private autosURL = ' https://catalogo-autos-nodejs.herokuapp.com/api/autos';
private autosActionURL = ' https://catalogo-autos-nodejs.herokuapp.com/api/autos';
  constructor(private http: HttpClient, private MessagesService: MessagesService) { }

  getAutos(): Observable<any>{
    return this.http.get<any>(this.autosURL).pipe(
      catchError(this.handleError<any>('getAutos')),
       tap(() => this.MessagesService.add('Autos Obtenidos'))
    )
  }

  createAutos(auto: Automovil): Observable<any>{
    return this.http.post<any>(`${this.autosActionURL}`, auto).pipe(catchError(this.handleError<any>('addAuto')),
    tap((result) => {console.log(result);
      this.MessagesService.add(`Auto Agrgado`)
    })
    
    )

  }

  updateAutos(auto: Automovil): Observable<any>{
    return this.http.put<any>(`${this.autosActionURL}/${auto._id}`, auto).pipe(catchError(this.handleError<any>('addAuto')),
    tap((result) => {console.log(result);
      this.MessagesService.add(`Auto actualizado`)
    })
    
    );

  }

  deleteAutos(auto: Automovil): Observable<any>{
    return this.http.delete<any>(`${this.autosActionURL}/${auto._id}`).pipe(catchError(this.handleError<any>('addAuto')),
    tap((result) => {console.log(result);
      this.MessagesService.add(`Auto eliminado`)
    })
    
    );

  }

  

  private handleError<T>(operation = 'operacion',result?: T){
      return (error:any): Observable<T> => {
        this.MessagesService.add(`${operation} fallo:{error.message}`);
        return of(result as T);
      }
  }

}