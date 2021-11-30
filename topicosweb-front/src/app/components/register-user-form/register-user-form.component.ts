import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-register-user-form',
  templateUrl: './register-user-form.component.html',
  styleUrls: ['./register-user-form.component.css']
})
export class RegisterUserFormComponent implements OnInit {

  usuario: Usuario
  private original: Usuario

  constructor(private dialogRef: MatDialogRef<RegisterUserFormComponent>,
    @Inject(MAT_DIALOG_DATA) data: { usuario: Usuario })
  {
    this.usuario = data?.usuario || new Usuario();
    this.original = JSON.parse(JSON.stringify(this.usuario));

  }

  ngOnInit(): void {
  }

  register(userRegisterForm: FormGroup): void {
    this.dialogRef.close(this.usuario);
}

close() {
  Object.assign(this.usuario, this.original);
  this.dialogRef.close();
}



}
