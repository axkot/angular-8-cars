import { Injectable } from '@angular/core';
import {Car} from Car;
import {CarSummaryDto} from CarSummaryDto;

@Injectable()
export class CarDataService {
  
  items: Car = [
    {
      brand: "Ford", 
      model: "Focus",
      refueling: [
          {date: "2019-01-01", milage: "10000", liters: "19", isFull: true}
      ],
      service: [
        {date: "2019-01-01", price: "100"}
      ]
    },
    {brand: "Renault", model: "Scenic"}
    ];

  summary: CarSummaryDto = [
    {brand: "Ford", model: 'Focus', average_month: 100, average_month_fuel: 50, average_month_service: 40, average_month_other: 10},
    {brand: "Renault", model: 'Scenic', average_month: 200, average_month_fuel: 50, average_month_service: 40, average_month_other: 110}
  ]
  constructor() { 
    
  }

  addToCart(item: Car) {
    this.items.push(item);
  }

  getItems():Car[] {
    return this.items;
  }

  getName():String {
    return this.items[0].model;
  }

  clearCart():Car[] {
    this.items = [];
    return this.items;
  }

  getSummary(): CarSummaryDto[] {
    return this.summary;
  }
}