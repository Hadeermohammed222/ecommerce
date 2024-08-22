import { HttpClient } from '@angular/common/http';
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
  user_reg: any;
  password: any;
  email: any;
  name: any;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private _admain: AdmainService) { }

  signupForm!: FormGroup;
  loginForm!: FormGroup;

  ngOnInit(): void {
    this._admain.getUsers().subscribe((res) => {
      this.users = res;
      console.log(this.users);
    });

    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
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
      const existingUser = this.users.find((user: any) => 
        user.email === this.email && 
        user.password === this.password && 
        user.name === this.name
      );

      if (existingUser) {
        alert("User already registered");
      } else {
        this._admain.addUsers(signupForm.value).subscribe({
          next: () => {
            alert("You signed up successfully!");
            this.signin(); // Navigate to sign-in page after successful registration
          }
        });
      }
    } else {
      alert("Form is not valid");
    }
  }
  formsignin(form: FormGroup): void {
    if (form.valid) {
      // Find the user with matching credentials
      const user = this.users.find((user: any) => 
        user.name === form.value.name && 
        user.password === form.value.password
      );
     
      if (user) {
        // Redirect based on username
        if (user.name === "admain") {
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
