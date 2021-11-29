import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: string = '';
  password: string = '';
  constructor() { }

  ngOnInit(): void {
  }


  async login(loginForm: FormGroup): Promise<void> {
    try {
      const {  email, password } = loginForm.value;
      this.password = '';
     
      // this.authService.loginWithPhone(phone, this.captcha);
    } catch (err: any) {
      const keys = [
        `ERRORS.${err!.code}`,
        'APP.CLOSE'
      ];
    }

  }
}
