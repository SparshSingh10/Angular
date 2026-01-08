import { Component, Input,Output, EventEmitter } from '@angular/core';

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

@Output() rowClicked = new EventEmitter<any>();
 onRowClick(row: any) {
    console.log('CHILD: Row clicked', row);
    this.rowClicked.emit(row);
  }

  sortColumn: string | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
sortBy(column: string) {

  if (this.sortColumn === column) {
    // same column clicked → toggle direction
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    // new column clicked
    this.sortColumn = column;
    this.sortDirection = 'asc';
  }

  this.data.sort((a: any, b: any) => {
    if (a[column] < b[column]) {
      return this.sortDirection === 'asc' ? -1 : 1;
    }
    if (a[column] > b[column]) {
      return this.sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  console.log(`TABLE: Sorted by ${column} (${this.sortDirection})`);
}

}
