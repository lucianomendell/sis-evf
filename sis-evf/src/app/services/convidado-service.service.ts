import { environment } from './../../environments/environment';
import { ErrorUtil } from './../Util/error-util';
import { Convidado } from '../model/convidado';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConvidadoServiceService {
  private readonly API = environment.API;
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  //Criado apenas um Promise para atender atividade Solicitada

  getById(id: number): Promise<Convidado | undefined> {
    return this.httpClient.get<Convidado>(`${this.API}?${id}`).toPromise();
  }

  getAll(): Observable<Convidado[]> {
    return this.httpClient
      .get<Convidado[]>(`${this.API}`)
      .pipe(catchError(ErrorUtil.handleError));
  }

  save(convidado: Convidado): Observable<Convidado> {
    return this.httpClient.post<Convidado>(
      `${this.API}`,
      convidado,
      this.httpOptions
    );
  }

  deletar(id: number): Observable<void> {
    const query: HttpParams = new HttpParams().set('id', id);
    const options = id ? { params: query } : {};

    return this.httpClient
      .delete<void>(`${this.API}/${id}`, options)
      .pipe(catchError(ErrorUtil.handleError));
  }

  /*getById(id: number): Observable<Convidado> {
    const query: HttpParams = new HttpParams().set('id', id);
    const options = id ? { params: query } : {};

    return this.httpClient
      .get<Convidado>(`${this.URL}/${id}`, options)

      .pipe(catchError(ErrorUtil.handleError));
  }*/
}
