import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) { }

  userLogin = {
    username: '',
    password: ''
  }

  onLogin(): void {
    console.log(this.userLogin);
    this.router.navigate(['/home']);
  }
}
