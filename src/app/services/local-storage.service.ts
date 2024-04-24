import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  login(user:any){
    user.email= user.email.toLowerCase()
    if(this.getKeys().includes(user.email)){
      const data = JSON.parse(localStorage.getItem(user.email)!)
      if(data.password = user.password){
        return data
      }
      return false;
    }else{
      return false
    }
  }

  register(user:any){ 
    user.email= user.email.toLowerCase()
    if(this.getKeys().includes(user.email)){
      return false;
    }else{
      localStorage.setItem(user.email,JSON.stringify(user))
      return true
    }
  }

  getKeys(){
    const dataKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const clave = localStorage.key(i);
      dataKeys.push(clave) ;
    }
    return dataKeys;
  }
}
