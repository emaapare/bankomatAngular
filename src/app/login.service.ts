import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ErrorResponse } from './error-response.model'; 

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private apiUrl = 'http://localhost:5110/api/Banche/login';

    constructor(private http: HttpClient, private router: Router) {}

    login(username: string, password: string): Observable<ErrorResponse | any> {
        const data = { username, password };
        return this.http.post<any>(`${this.apiUrl}`, data)
            .pipe(
                catchError(error => {
                    return of(new ErrorResponse(false, 'Errore durante la richiesta di login.'));
                })
            );
    }
}
