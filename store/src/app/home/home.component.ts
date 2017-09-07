import { Component, OnInit } from '@angular/core';
import { Store } from '../store/store.component'
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService]
})

export class HomeComponent  implements OnInit {

  stores: Store[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.stores= this.dataService.getData();
  }

  selectedStore: Store;

  onSelect(store: Store): void {
    this.selectedStore = store;
  }

}
