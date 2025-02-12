import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap , catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7095/signup';
  constructor(private http: HttpClient, private router:Router) { }

  register(userdata: any) {
    console.log('Calling the register api', userdata);
    this.http.post(this.apiUrl, userdata).pipe(
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
}
