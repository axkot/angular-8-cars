import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarDataService } from './car-data.service';
import { CarTableComponent } from './car-summary-table/car-summary-table.component';
import { TableBasicExample } from './table-basic-example/table-basic-example';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatTableModule, MatToolbarModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, CarListComponent,CarTableComponent, TableBasicExample ],
  bootstrap:    [ AppComponent ],
  providers: [CarDataService]
})
export class AppModule { }
