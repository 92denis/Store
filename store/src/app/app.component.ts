import { Component } from '@angular/core';
import { Store } from './store/store.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  stores: Store[];

  constructor() {
    this.stores = [{
      id: 1,
      name: 'Windstorm',
      adress: 'Minsk',
      time: '10:00 - 19:00'
    }, {
      id: 2,
      name: 'Wind',
      adress: 'Minsk',
      time: '11:00 - 18:00'
    }];
  }
  selectedStore: Store;
  
   onSelect(store: Store): void {
     this.selectedStore = store;
   }
}
