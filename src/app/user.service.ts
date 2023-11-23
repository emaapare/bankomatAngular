import { Injectable } from '@angular/core';
import { User } from './user';
import { UserPasswordUpdate } from './user-password-update';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:5110/api/Utenti';
  private deleteUrl = 'http://localhost:5110/api/Utenti/';
  private addUrl = 'http://localhost:5110/api/Utenti';
  private editPasswordUrl = 'http://localhost:5110/api/Utenti/password';
  private editLockedUrl = 'http://localhost:5110/api/Utenti/bloccato/';
  private getUserByIdUrl = 'http://localhost:5110/api/Utenti/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.usersUrl}`);
  }

  cancellaUtente(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.deleteUrl}${userId}`);
  }

  aggiungiUtente(newUser: User): Observable<User> {
    return this.http.post<User>(`${this.addUrl}`, newUser);
  }

  modificaPassword(id: number, newPassword: string): Observable<any> {
    const url = `${this.editPasswordUrl}/${id}?password=${newPassword}`;
    return this.http.put(url, {});
  }

  getStatoBloccato(userId: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.editLockedUrl}/bloccato/${userId}`);
  }

  modificaBloccato(userId: number, nuovoStatoBloccato: boolean): Observable<any> {
    const url = `${this.editLockedUrl}${userId}?bloccato=${nuovoStatoBloccato}`;
    return this.http.put(url, {});
  }

  getUserNameById(userId: number): Observable<User> {
    const url = `${this.getUserByIdUrl}${userId}`;
    return this.http.get<User>(url);
  }
}

