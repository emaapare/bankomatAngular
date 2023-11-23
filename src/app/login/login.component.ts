import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }
  
    this.loginService.login(this.username, this.password)
  .subscribe(
    response => {
      console.log(response);
      if (response.success) {
        this.router.navigate(['/home']);
      }
    },
    error => {
      console.error('Errore durante la richiesta di login:', error);
    }
  );

  }
}
