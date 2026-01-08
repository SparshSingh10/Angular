import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  isLoading = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.loading$.subscribe(loading => {
//       LoaderComponent is listening
// It will react whenever loading becomes true or false in loader service
      console.log('LOADER COMPONENT: loading =', loading);
      this.isLoading = loading;
    });
  }
}
