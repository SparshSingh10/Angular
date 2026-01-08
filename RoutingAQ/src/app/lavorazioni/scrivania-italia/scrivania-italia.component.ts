import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../shared/table/table.component';
import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-scrivania-italia',
  templateUrl: './scrivania-italia.component.html',
  styleUrls: ['./scrivania-italia.component.css']
})
export class ScrivaniaItaliaComponent implements OnInit {
  selectedRow: any = null;
  
  columns: TableColumn[] = [
    { key: 'id', label: 'ID' },
    { key: 'cliente', label: 'Cliente' },
    { key: 'importo', label: 'Importo' },
    { key: 'stato', label: 'Stato' }
  ];

  data = [
    { id: 1, cliente: 'Mario Rossi', importo: '€1,500', stato: 'Attivo' },
    { id: 2, cliente: 'Luigi Bianchi', importo: '€2,300', stato: 'Pending' },
    { id: 3, cliente: 'Anna Verdi', importo: '€850', stato: 'Completato' },
    { id: 4, cliente: 'Paolo Neri', importo: '€3,200', stato: 'Attivo' }
  ];

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit(): void {
    this.dataSharingService.selectedRow$.subscribe(row => {
      console.log('ScrivaniaItaliaComponent: Received shared row from sibling', row);
    });
  }

  onRowSelected(row: any): void {
    console.log('ScrivaniaItaliaComponent: Row selected', row);
    this.selectedRow = row;
    this.dataSharingService.shareSelectedRow(row);
  }
}
