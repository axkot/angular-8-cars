import { Injectable } from '@angular/core';
import {Car} from Car;

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
}