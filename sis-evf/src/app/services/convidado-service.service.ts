import { Convidado } from '../model/convidado';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConvidadoServiceService {
  URL = 'http://localhost:3000/convidados';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getById(id: number): Promise<Convidado | undefined> {
    return this.httpClient.get<Convidado>(`${this.URL}?${id}`).toPromise();
  }

  getAll(): Promise<Convidado[] | undefined> {
    return this.httpClient.get<any[]>(`${this.URL}`).toPromise();
  }

  save(convidado: Convidado): Promise<Convidado | undefined> {
    return this.httpClient
      .post<Convidado>(this.URL, JSON.stringify(convidado), this.httpOptions)
      .toPromise();
  }
}
