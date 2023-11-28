import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioReservaCitaComponent } from './formulario-reserva-cita/formulario-reserva-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioReservaCitaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
