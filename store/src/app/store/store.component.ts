import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

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

export class StoreComponent implements OnInit, OnDestroy  {
  // @Input() store: Store;
  @Input() stores: Store[] = [];

  private id: number;
  private subscription: Subscription;

  constructor(private dataService: DataService, private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.stores = this.dataService.getData();
  }
}
