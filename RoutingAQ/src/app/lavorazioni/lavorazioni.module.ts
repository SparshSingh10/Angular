import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LavorazioniRoutingModule } from './lavorazioni-routing.module';
import { ScrivaniaItaliaComponent } from './scrivania-italia/scrivania-italia.component';
import { ScrivaniaEsteroComponent } from './scrivania-estero/scrivania-estero.component';
import { IncassiComponent } from './incassi/incassi.component';
import { TableComponent } from '../shared/table/table.component';


@NgModule({
  declarations: [
    ScrivaniaItaliaComponent,
    ScrivaniaEsteroComponent,
    IncassiComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    LavorazioniRoutingModule
  ]
})
export class LavorazioniModule { }
