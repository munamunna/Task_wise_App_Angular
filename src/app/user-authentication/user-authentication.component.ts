import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.css']
})
export class UserAuthenticationComponent {
  errorMessage: string = '';
  usernameErrorMessage: string = ''; // Declare usernameErrorMessage property
  emailErrorMessage: string = ''; // Declare emailErrorMessage property
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: UserServiceService, private router: Router) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  createUser() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      this.service.CreateUser(formData).subscribe(
        (response: any) => {
          // Handle successful registration
          console.log('User registration successful:', response);
          // After successful registration, login automatically
          this.loginUser(formData);
        },
        (error: any) => {
          // Handle error
          if (error instanceof HttpErrorResponse) {
            console.error('HTTP error occurred:', error.status);
            console.error('Error message:', error.message);
            if (error.status === 400 && error.error.email) {
              // If the error status is 400 (Bad Request) and the error contains email field
              this.emailErrorMessage = 'Email address already exists.';
            } else if (error.status === 400 && error.error.username) {
              // If the error status is 400 (Bad Request) and the error contains username field
              this.usernameErrorMessage = 'Username already exists.';
            } else {
              // For other errors, display a generic error message
              this.errorMessage = 'User registration failed. Please try again.';
            }
          } else {
            console.error('Non-HTTP error occurred:', error);
            // Display a generic error message for non-HTTP errors
            this.errorMessage = 'User registration failed. Please try again.';
          }
        }
      );
    } else {
      this.errorMessage = 'Invalid form. Please fill in all required fields.';
    }
  }

  loginUser(userData: any) {
    this.service.login(userData).subscribe(
      (loginResponse: any) => {
        // Login successful
        console.log('User login successful:', loginResponse);
        const token = loginResponse.token;
        localStorage.setItem('authToken', token); // Store token in local storage
        // Redirect to the desired page after successful login
        this.router.navigate(['/addtodos']);
      },
      (error: any) => {
        // Login failed
        console.error('User login failed:', error);
        console.log('Error Response:', error.error);
        this.errorMessage = error.error.non_field_errors[0]; // Display the error message
      }
    );
  }
  
}
