import { Component } from '@angular/core';

@Component({
  selector: 'app-scrivania-italia',
  templateUrl: './scrivania-italia.component.html',
  styleUrls: ['./scrivania-italia.component.css']
})
export class ScrivaniaItaliaComponent {
columns = ['id', 'client', 'amount'];
data = [
    { id: 1, client: 'Mario Rossi', amount: 1000 },
    { id: 2, client: 'Luigi Verdi', amount: 2000 },
    { id: 3, client: 'Anna Bianchi', amount: 1500 }
  ];
}
