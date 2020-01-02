import {Component} from '@angular/core';

export interface PeriodicElement1 {
  model: string;
  brand: string;
  average_month: number;
  average_month_fuel: number;
  average_month_service: number;
  average_month_other: number;
}

const ELEMENT_DATA: PeriodicElement1[] = [
  {brand: "Ford", model: 'Focus', average_month: 100, average_month_fuel: 50, average_month_service: 40, average_month_other: 10},
  {brand: "Renault", model: 'Scenic', average_month: 200, average_month_fuel: 50, average_month_service: 40, average_month_other: 110}
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
  displayedColumns: string[] = ['brand', 'model', 'average_month', 'average_month_fuel', 'average_month_service', 'average_month_other'];
  dataSource = ELEMENT_DATA;

  constructor() { }

}
