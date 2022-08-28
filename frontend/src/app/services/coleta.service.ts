import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';
import { Coleta } from './../models/Coleta.model';

@Injectable({
  providedIn: 'root'
})
export class ColetaService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getLista(): Observable<any> {
    const url = `${this.baseUrl}/coletas`;
    return this.http.get(url);
  }

  create(coleta: Coleta): Observable<Coleta>{
    const url = `${this.baseUrl}/coletas`;
    return this.http.post<Coleta>(url, coleta);
  }

}
