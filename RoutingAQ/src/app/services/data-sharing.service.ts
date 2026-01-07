import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private selectedRowSubject = new Subject<any>();
  
  selectedRow$ = this.selectedRowSubject.asObservable();

  shareSelectedRow(rowData: any): void {
    console.log('DataSharingService: Sharing row data', rowData);
    this.selectedRowSubject.next(rowData);
  }
}