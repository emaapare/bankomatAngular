import { Injectable } from '@angular/core';
import { Bank } from './bank';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private usersUrl = 'http://localhost:5110/api/Banche';
  private getFunctionalitum = 'http://localhost:5110/api/Banche/funzionalita/';
  private getAllFunctionalitium = 'http://localhost:5110/api/Banche/funzionalita';
  private aggiungiFunzionalitaUrl = 'http://localhost:5110/api/Banche/attiva';
  private rimuoviFunzionalitaUrl = 'http://localhost:5110/api/Banche/disattiva';

  constructor(private http: HttpClient) { }

  getBanks(): Observable<Bank[]>{
    return this.http.get<Bank[]>(`${this.usersUrl}`);
  }

  getBankFunctionalities(bankId: number): Observable<any> {
    const url = `${this.getFunctionalitum}${bankId}`;
    console.log(url);
    return this.http.get(url);
  } 

  getFunctionalities(): Observable<any>{
    return this.http.get<Bank[]>(`${this.getAllFunctionalitium}`);
  }

  aggiungiFunzionalita(bancaId: number, funzionalitaId: number): Observable<any> {
    const url = `${this.aggiungiFunzionalitaUrl}/${bancaId}/${funzionalitaId}`;
    return this.http.post(url, {});
  }

  rimuoviFunzionalita(bancaId: number, funzionalitaId: number): Observable<any> {
    const url = `${this.rimuoviFunzionalitaUrl}/${bancaId}/${funzionalitaId}`;
    return this.http.delete(url);
  }

}
