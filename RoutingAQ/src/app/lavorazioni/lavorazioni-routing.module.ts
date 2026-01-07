import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrivaniaItaliaComponent } from './scrivania-italia/scrivania-italia.component';
import { ScrivaniaEsteroComponent } from './scrivania-estero/scrivania-estero.component';
import { IncassiComponent } from './incassi/incassi.component';

const routes: Routes = [
  { path: 'scrivania-italia', component: ScrivaniaItaliaComponent },
  { path: 'scrivania-estero', component: ScrivaniaEsteroComponent },
  { path: 'incassi', component: IncassiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LavorazioniRoutingModule { }
