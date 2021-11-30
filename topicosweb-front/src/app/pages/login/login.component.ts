import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: string = '';
  password: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  async login(loginForm: FormGroup): Promise<void> {
    try {
      const {  email, password } = loginForm.value;
      this.password = '';
      this.router.navigateByUrl('/home')
    } catch (err: any) {
      const keys = [
        `ERRORS.${err!.code}`,
        'APP.CLOSE'
      ];
    }

  }
}
