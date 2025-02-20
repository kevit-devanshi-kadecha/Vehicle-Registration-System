import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signupApiUrl = 'https://localhost:7095/signup';
  private loginApiUrl = 'https://localhost:7095/login';

  constructor(private http: HttpClient, private router:Router) { }

  register(userdata: any): Observable<any> {
    console.log('Calling the register api', userdata);
    return this.http.post<any>(this.signupApiUrl, userdata).pipe(
      tap(response => console.log('API Response:', response)),
      catchError(error => {
        console.log('API Error:', error);
        return throwError(error);
      })
    );
  }

  login(userdata: any): Observable<any> {
    console.log('Calling the login api', userdata);
    return this.http.post<any>(this.loginApiUrl, userdata).pipe(
      tap(response => {
        if (response) {
          console.log('User login successful', response);
          localStorage.setItem('token', response.token);
        }
      }),
      catchError(error => {
        alert(error.error?.Message || 'User login failed');
        return throwError(error);
      })
    );
  }
}