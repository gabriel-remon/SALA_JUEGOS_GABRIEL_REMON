import { Component } from '@angular/core';
import { IngresoJuegoComponent } from '../../components/ingreso-juego/ingreso-juego.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IngresoJuegoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  linkJuego1="./assets/preguntados.png"
  textJuego1="preguntados";
  linkJuego2="./assets/ahorcado.png"
  textJuego2="ahorcado";
  linkJuego3="./assets/cartas.jpg"
  textJuego3="mayor o menor";
  linkJuego4="./assets/juego.jpg"
  textJuego4="P.P.T.L.S.";
}
