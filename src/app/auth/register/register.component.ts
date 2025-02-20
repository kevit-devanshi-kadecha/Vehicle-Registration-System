import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private authService : AuthService, private router: Router) { }
   
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
      // confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      // phoneNumber: [''] // Optional field
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log('Register form submitted', this.registerForm.value);
      this.authService.register(this.registerForm.value).subscribe(
        response => {
          console.log('Registered successfully', response);
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Registration error', error);
        }
      );
    }
  }
  goToLoginPage(){
    this.router.navigate(['/login']);
  }
}