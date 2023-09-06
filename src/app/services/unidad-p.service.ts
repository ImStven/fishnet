import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { UnidadP } from '../model/models'

@Injectable({
  providedIn: 'root'
})
export class UnidadPService {
  private apiUrl = 'http://localhost:8080/api/V1/'

  constructor( private http: HttpClient) { }


  getUnidadP(): Observable<UnidadP[]> {
    console.log('ENTRO');

    return this.http.get<UnidadP[]>(this.apiUrl+ 'unidad-productiva');
  }

}
