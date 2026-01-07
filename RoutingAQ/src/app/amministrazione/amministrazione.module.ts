import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmministrazioneRoutingModule } from './amministrazione-routing.module';
import { UtentiComponent } from './utenti/utenti.component';
import { ConfigurazioniComponent } from './configurazioni/configurazioni.component';

@NgModule({
  declarations: [
    UtentiComponent,
    ConfigurazioniComponent
  ],
  imports: [
    CommonModule,
    AmministrazioneRoutingModule
  ]
})
export class AmministrazioneModule { }