import { Component } from '@angular/core';
import { DataSharingService } from '../../services/data-sharing.service';

@Component({
  selector: 'app-scrivania-estero',
  templateUrl: './scrivania-estero.component.html',
  styleUrls: ['./scrivania-estero.component.css']
})
export class ScrivaniaEsteroComponent {
constructor(private dataSharingService: DataSharingService) {}
receivedRow: any;

  ngOnInit() {
    this.dataSharingService.selectedRow$.subscribe(row => {
      console.log('ESTERO: Received row', row);
      this.receivedRow = row;
    });
  }
}
