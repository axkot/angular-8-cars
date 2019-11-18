import {Component} from '@angular/core';

export interface PeriodicElement1 {
  model: string;
  brand: string;
}

const ELEMENT_DATA: PeriodicElement1[] = [
  {brand: "Ford", model: 'Focus'},
  {brand: "Renault", model: 'Scenic'}
];


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent {
  displayedColumns: string[] = ['brand', 'model'];
  dataSource = ELEMENT_DATA;

  constructor() { }

}
