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
  name: string;
  address: string;
  time: string;
  stores: Store[];
  selectedStore: Store;
  resultsMap: any; 

  constructor(private router: Router, private dataService: DataService) {

  }

  getStores(): void {
    this.dataService.getStores().then(stores => this.stores = stores);
  }

  ngOnInit(): void {
    this.getStores();
  }

  addItem(store: Store) {
    store.lat = 50;
    store.lng =7;
    store.id = this.stores.length != 0 ? this.stores[this.stores.length - 1].id + 1 : 1;
    this.dataService.addStore(store);
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
