import {Component} from '@angular/core';
import {CarDataService} from '../car-data.service';
import {CarSummaryDto} from '../car-summary-dto';


@Component({
  selector: 'app-car-summary-table',
  templateUrl: './car-summary-table.component.html',
  styleUrls: ['./car-summary-table.component.css']
})
export class CarTableComponent {
  displayedColumns: string[] = ['brand', 'model', 'average_month', 'average_month_fuel', 'average_month_service', 'average_month_other'];

  dataSource: CarSummaryDto[];

  constructor(carService: CarDataService) {
    this.dataSource = carService.getSummary()
   }

}
