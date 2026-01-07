import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../shared/table/table.component';
import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-scrivania-estero',
  templateUrl: './scrivania-estero.component.html',
  styleUrls: ['./scrivania-estero.component.css']
})
export class ScrivaniaEsteroComponent implements OnInit {
  selectedRow: any = null;
  
  columns: TableColumn[] = [
    { key: 'id', label: 'ID' },
    { key: 'country', label: 'Paese' },
    { key: 'amount', label: 'Importo' },
    { key: 'currency', label: 'Valuta' },
    { key: 'status', label: 'Stato' }
  ];

  data = [
    { id: 101, country: 'Germania', amount: '5,200', currency: 'EUR', status: 'Processato' },
    { id: 102, country: 'Francia', amount: '3,800', currency: 'EUR', status: 'In Attesa' },
    { id: 103, country: 'USA', amount: '7,500', currency: 'USD', status: 'Completato' },
    { id: 104, country: 'Regno Unito', amount: '4,100', currency: 'GBP', status: 'Processato' }
  ];

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit(): void {
    // Listen to shared data from sibling component
    this.dataSharingService.selectedRow$.subscribe(row => {
      console.log('ScrivaniaEsteroComponent: Received shared row from sibling', row);
    });
  }

  onRowSelected(row: any): void {
    console.log('ScrivaniaEsteroComponent: Row selected', row);
    this.selectedRow = row;
    this.dataSharingService.shareSelectedRow(row);
  }
}
