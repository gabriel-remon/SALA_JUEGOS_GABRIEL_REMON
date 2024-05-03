import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorageService } from '../../services/local-storage.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FireServiceService } from '../../services/fire-service.service';
import { User } from '../../models/user';
import { getAuth, signInWithEmailAndPassword } from '@angular/fire/auth';

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
//firebaseSrc=inject(FireServiceService)

  submitLogin(){
    let user = this.formLogin.value as User
    //const res = this.localStorage.login(this.formLogin.value)?"usuario logeado":"no se encontro el usuario"
    signInWithEmailAndPassword(getAuth(),user.email,user.password).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
    
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
