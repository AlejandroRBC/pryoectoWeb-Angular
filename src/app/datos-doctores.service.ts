import { Injectable } from '@angular/core';
import { doctor } from './doctors';
@Injectable({
  providedIn: 'root',
})
export class DatosDoctoresService {
  constructor() {}
  vecDoctores: doctor[] = [
    {
      area: 'Medicina',
      foto: 'assets/doc1.jpg',
      nombre: 'Yovana Carrisales',
      detalles:
        'medico cirujano con experiencia en el area de cuidado de niños con diferentes discapacidades y esecialidades',
      telefono: '70543131',
      email: 'hola@mail.com',
    },
    {
      area: 'Nutricion',
      foto: 'assets/doc2.jpg',
      nombre: 'Claudia Gamarra',
      detalles:
        'Nutrucionsita especializada en la alimentacion de casos de trastornos alimenticon',
      telefono: '70543131',
      email: 'hola@mail.com',
    },
    {
      area: 'Fisioterapia',
      foto: 'assets/doc3.jpg',
      nombre: 'Marco Montoya',
      detalles:
        'Fisioterapeuta especializado en la reahabilitacion rapida de niños y adultos que lo requieran',
      telefono: '70543131',
      email: 'hola@mail.com',
    },
    {
      area: 'FonoAudiologia',
      foto: 'assets/doc4.jpg',
      nombre: '',
      detalles: 'pediatra especializado en fonoaudiología,',
      telefono: '70543131',
      email: 'hola@mail.com',
    },
    {
      area: 'Psicomotricidad',
      foto: 'assets/doc5.jpg',
      nombre: '',
      detalles: '',
      telefono: '70543131',
      email: 'hola@mail.com',
    },
    {
      area: 'Psicologia',
      foto: 'assets/doc6.jpg',
      nombre: '',
      detalles: '',
      telefono: '70543131',
      email: 'hola@mail.com',
    },
  ];

  valor: number = 0;
}
