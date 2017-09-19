import { Component, OnInit } from '@angular/core';
import { Store } from '../store';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  id: number;
  stores: Store[];
  newStore: Store;
  resultsMap: any;


  constructor(private router: Router, private dataService: DataService) {
    this.newStore = new Store(0, null, null, null, 0, 0);
  }

  getStores(): void {
    this.dataService.getStores().then(stores => this.stores = stores);
  }

  ngOnInit(): void {
    this.getStores();
  }

  addItem() {
    this.newStore.lat = 50;
    this.newStore.lng = 7;
    this.newStore.id = this.stores.length != 0 ? this.stores[this.stores.length - 1].id + 1 : 1;
    this.dataService.addStore(this.newStore);
  }
  delStore(store: Store) {
    this.dataService.deleteStore(store);
  }
  edit(id: number): void {
    this.router.navigate(['/edit', id]);
  }
  showProduct(id: number): void {
    this.router.navigate(['/product', id]);
  }

}
