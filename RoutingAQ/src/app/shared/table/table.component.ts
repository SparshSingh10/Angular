import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
// columns = ['id', 'name', 'country'];
// data = [
//     { id: 1, name: 'Mario', country: 'Italy' },
//     { id: 2, name: 'John', country: 'USA' },
//     { id: 3, name: 'Ana', country: 'Spain' }
//   ];
  getValue(row: any, col: string) {
  return row[col];
}

@Input() columns: string[] = [];
// “Dear parent, you will give me columns.”
@Input() data: any[] = [];
// I used any[] because the table is generic and should support multiple data structures. 
// your row is an object, not a string.
// 1️⃣ Angular renders template before inputs arrive
// 2️⃣ *ngFor cannot loop over undefined
// 3️⃣ Empty array is safe
// 4️⃣ any[] keeps table reusable
// Why does Angular not wait for parent before rendering template?
// Answer:
// Because Angular creates and renders components independently, then binds inputs later.
}
