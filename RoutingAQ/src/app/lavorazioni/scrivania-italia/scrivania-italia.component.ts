import { Component } from '@angular/core';
import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-scrivania-italia',
  templateUrl: './scrivania-italia.component.html',
  styleUrls: ['./scrivania-italia.component.css']
})
export class ScrivaniaItaliaComponent {
  constructor(private dataSharingService: DataSharingService) {}

columns = ['id', 'client', 'amount'];
data = [
    { id: 1, client: 'Mario Rossi', amount: 1000 },
    { id: 2, client: 'Luigi Verdi', amount: 2000 },
    { id: 3, client: 'Anna Bianchi', amount: 1500 }
  ];

  selectedRow: any;

onRowSelected(row: any) {
  // console.log('PARENT: Row received', row);
  // this.selectedRow = row;

  console.log('ITALIA (Parent): Row selected or received', row);
  this.selectedRow = row;

  this.dataSharingService.shareSelectedRow(row);

}

}
