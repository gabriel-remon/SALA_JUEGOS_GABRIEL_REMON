import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FireServiceService } from '../../services/fire-service.service';
import { User } from '../../models/user';
import { Auth, getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';

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
  
  constructor(public auth: Auth) {
  }

  Login() {
    
  }

  localStorage = inject(LocalStorageService)

  submitLogin(){
    let user = this.formLogin.value as User
    console.log(user.email)
    console.log(user.password)
    signInWithEmailAndPassword(this.auth, user.email, user.password).then((res) => {
      //if (res.user.email !== null) this.loggedUser = res.user.email;
      console.log(res)
    }).catch((e) => console.log(e))
    //this.firebaseSrc.login(user.email,user.password)
    //const res = this.localStorage.login(this.formLogin.value)?"usuario logeado":"no se encontro el usuario"

    
  }
  submitRegister(){
    
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
