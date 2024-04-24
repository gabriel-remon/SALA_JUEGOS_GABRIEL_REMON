import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formLogin= new FormGroup ({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  formRegister= new FormGroup ({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  })
  
  localStorage = inject(LocalStorageService)

  submitLogin(){
   
    
    const res = this.localStorage.login(this.formLogin.value)?"usuario logeado":"no se encontro el usuario"
    alert(res)
  }
  submitRegister(){
    alert((this.localStorage.register( this.formRegister.value)?
      "registro exitoso":"no se puedo registrar"))
  }

  expression=false
  mode="password";

  changeMode(){
    this.mode = this.mode==="password"?"text":"password";
  }

  changeLogin(){
    this.expression= !this.expression;
  }

 cerrarComponenteYVolver() {
    window.history.back();
  }
}
