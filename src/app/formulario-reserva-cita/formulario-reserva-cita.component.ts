import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-reserva-cita',
  templateUrl: './formulario-reserva-cita.component.html',
  styleUrls: ['./formulario-reserva-cita.component.css']
})
export class FormularioReservaCitaComponent {
  Dias = [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30] 
  Meses = ["Enero", "Febrero","Marzo","Abril","Mayo", "Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
  Anios = [2023,2024]
  Areas=["Psicologia","Medicina","Fisioterapia","Fonoaudiologia","Nutricion","Psicomotricidad"]
}
