import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
columns = ['id', 'name', 'country'];
data = [
    { id: 1, name: 'Mario', country: 'Italy' },
    { id: 2, name: 'John', country: 'USA' },
    { id: 3, name: 'Ana', country: 'Spain' }
  ];
  getValue(row: any, col: string) {
  return row[col];
}

}
