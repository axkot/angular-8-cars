import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarDataService } from './car-data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CarListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CarDataService]
})
export class AppModule { }
