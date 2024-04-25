import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent implements   OnInit {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  ngOnInit(){
    const options = {
      strings: ["programador","vendedor","tecnico electronico"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      showCursor: true,
      cursorChar: '|',
      loop: true
 };
     
 const typed = new Typed('.cambio', options);
  }

  
}
