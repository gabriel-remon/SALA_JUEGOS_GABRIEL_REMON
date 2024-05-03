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

}
