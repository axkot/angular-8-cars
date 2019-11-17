import { Component, OnInit } from '@angular/core';
import {CarDataService} from '../car-data.service';
import {Car} from '../car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  items: Car[]

  constructor(carService: CarDataService) {
    this.items = carService.getItems()
   }

  ngOnInit() {
  }

}