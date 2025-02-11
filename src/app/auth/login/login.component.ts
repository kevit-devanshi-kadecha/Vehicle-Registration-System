import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  /* formbuilder is the service that helps create form groups and form controls instances */
  constructor(private fb: FormBuilder,/* private authService: AuthService*/ private router: Router) {}
  ngOnInit() {   
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  onSubmit() {  
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      /*service call for login user */
      this.router.navigate(['/dashboard']);
    }
  }
  isAuthPage(): boolean {
    const authRoutes = ['/login', '/signup'];
    return authRoutes.includes(this.router.url);
  }
}
