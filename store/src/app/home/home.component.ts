import { Component, OnInit } from '@angular/core';
import {Store} from '../store';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  stores: Store[];
  selectedStore: Store;

  constructor(private router: Router, private dataService: DataService) {

  }

  getStores(): void {
    this.dataService.getStores().then(stores => this.stores = stores);
  }

  ngOnInit(): void {
    this.getStores();
  }
  onSelect(store: Store): void {
    this.selectedStore = store;
  }
  addItem(id: number, name: string, address: string, time: string) {
  id = this.stores[this.stores.length -1].id + 1;
  this.dataService.addStore(id, name, address, time);
  }
  edit(): void {
    this.router.navigate(['/edit', this.selectedStore.id]);
  }

}
