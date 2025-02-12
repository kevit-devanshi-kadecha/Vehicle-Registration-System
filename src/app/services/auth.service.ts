import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap , catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signupApiUrl = 'https://localhost:7095/signup';
  private loginApiUrl = 'https://localhost:7095/login';

  constructor(private http: HttpClient, private router:Router) { }

  register(userdata: any) {
    console.log('Calling the register api', userdata);
    this.http.post<any>(this.signupApiUrl, userdata).pipe(
      tap(response => {
        if(response)
        {
          console.log('User registration successful', response);
          alert(response); 
          this.router.navigate(['/login']);
        }
      }),
      catchError(error => {
        alert(error.error?.Message || 'User registration failed');
        throw error;
      })
    ).subscribe();
  }

  login(userdata: any){
    console.log('Calling the login api', userdata);
    this.http.post<any>(this.loginApiUrl, userdata).pipe(
      tap(response => {
        if(response)
        { 
          console.log('User login successful', response);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        }
      }),
      catchError(error => {
        alert(error.error?.Message || 'User login failed');
        throw error;
      })
    ).subscribe();
  }
}
