import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth,updateProfile,signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore,setDoc,doc } from '@angular/fire/firestore';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class FireServiceService {
  constructor(private afauth:AngularFireAuth) {}


  async login(email: string, password: string): Promise<string> {
    let mensaje: string = '';

    try {
      await this.afauth.signInWithEmailAndPassword(email, password);
      mensaje='funciono';
      return mensaje;
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-email':
          mensaje = 'Correo inválido';
          console.log('Correo inválido');
          break;
        case 'auth/user-not-found':
          mensaje = 'Usuario no encontrado';
          console.log('Usuario no encontrado');
          break;
        case 'auth/wrong-password':
        case 'auth/missing-password':
          mensaje = 'Contraseña inválida';
          console.log('Contraseña inválida');
          break;
        case 'auth/internal-error':
          mensaje = 'Error interno';
          console.log('Error interno');
          break;
        case 'auth/too-many-requests':
          mensaje = 'Muchas llamadas en poco tiempo';
          console.log('Muchas llamadas en poco tiempo');
          break;
        default:
          mensaje = 'error.message';
          console.log(error);
          break;
      }
      return mensaje;
    }
  }







/*
  auth = inject(AngularFireAuth);
  fireStorage = inject(AngularFirestore)
  // autentificacion

  login(user:User){
    return signInWithEmailAndPassword(getAuth(),user.email,user.password)
  }
  register(user:User){
    return createUserWithEmailAndPassword(getAuth(),user.email,user.password)
  }

  

  //base de datos firestore

  setDocument(path: string, data:any){
    return setDoc(doc(getFirestore(),path),data);
  }
*/
}
