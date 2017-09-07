import { DataService } from '../data.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

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
  @Input() store: Store;
 stores: Store[] = [];

  private id: number;
  private subscription: Subscription;

  constructor(private dataService: DataService, private route: ActivatedRoute,
    private location: Location) {
    // this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);
  }
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
       this.route.paramMap
      .switchMap((params: ParamMap) => this.dataService.getStore(+params.get('id')))
      .subscribe(store => this.store = store);
  }
}
