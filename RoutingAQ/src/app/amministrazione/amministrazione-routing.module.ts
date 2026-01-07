import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtentiComponent } from './utenti/utenti.component';
import { ConfigurazioniComponent } from './configurazioni/configurazioni.component';

const routes: Routes = [
  { path: 'utenti', component: UtentiComponent },
  { path: 'configurazioni', component: ConfigurazioniComponent },
  { path: '', redirectTo: 'utenti', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmministrazioneRoutingModule { }