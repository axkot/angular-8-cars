import { Injectable } from '@angular/core';

@Injectable()
export class CarDataService {
  
  items = [];

  constructor() { 
    
  }

  addToCart(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  getName() {
    return this.items[0].model;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}