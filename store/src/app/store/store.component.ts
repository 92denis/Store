import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

export class Store {
  id: number;
  name: string;
  adress: string;
  time: string;
}

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [DataService]
})

export class StoreComponent implements OnInit {
  // @Input() store: Store;
  @Input() stores: Store[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.stores= this.dataService.getData();
  }
}
