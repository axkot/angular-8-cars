import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  name = "My Name"
  items = [ 0, 1, 2, 3 ]

  constructor() { }

  ngOnInit() {
  }

}