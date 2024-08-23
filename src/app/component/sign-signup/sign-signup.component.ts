import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdmainService } from 'src/app/admain/admain.service';

@Component({
  selector: 'app-sign-signup',
  templateUrl: './sign-signup.component.html',
  styleUrls: ['./sign-signup.component.css']
})
export class SignSignupComponent implements OnInit {
  isshow = false;
  users: any;
  signupForm!: FormGroup;
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _admain: AdmainService
  ) {}

  ngOnInit(): void {
    this._admain.getUsers().subscribe((res) => {
      this.users = res;
    });

    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signup() {
    this.isshow = true;
  }

  signin() {
    this.isshow = false;
  }

  submitRegisterForm(signupForm: FormGroup) {
    if (signupForm.valid) {
      const { name, email, password } = signupForm.value;
  
      // Check if the "admin" user already exists
      const existingAdmin = this.users.find((user: any) => user.name === 'admin');
      if (name === 'admin' && existingAdmin) {
        alert("The username 'admin' is already taken. Only one admin can sign up.");
        return;
      }
  
      // Check if the user with the same email already exists
      const existingUser = this.users.find((user: any) => user.email === email);
      if (existingUser) {
        alert("User already registered with this email.");
      } else {
        // Pass both data and password separately to the addUsers method
        this._admain.addUsers({ name, email }, password).subscribe({
          next: () => {
            alert("You signed up successfully!");
            this.signin(); // Navigate to sign-in page after successful registration
          },
          error: () => {
            alert("There was an error signing up. Please try again.");
          }
        });
      }
    } else {
      alert("Form is not valid");
    }
  }
  

  formsignin(form: FormGroup): void {
    this._admain.getUsers().subscribe((res) => {
      this.users = res;
    });
    if (form.valid) {
      console.log('Form Values:', form.value); // Log the form values
      console.log('Users:', this.users); // Log the users array
  
      const user = this.users.find((user: any) =>
        user.name.trim().toLowerCase() === form.value.name.trim().toLowerCase() &&
        user.password === form.value.password.trim()
      );
  
      if (user) {
        // Redirect based on username
        if (user.name.toLowerCase() === 'admin') {
          this.router.navigate(['/market']);
        } else {
          this.router.navigate(['/home']);
        }
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Form is not valid");
    }
  }
}  


