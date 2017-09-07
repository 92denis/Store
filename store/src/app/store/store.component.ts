import { DataService } from '../data.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

export class Store {
  constructor(public id: number,
              public name: string,
              public address: string,
              public time: string) { }
}

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {
  @Input() store: Store;
  constructor(private dataService: DataService, private route: ActivatedRoute,
    private location: Location) {

  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.dataService.getStore(+params.get('id')))
      .subscribe(store => this.store = store);
  }

  goBack(): void {
    this.dataService.update(this.store);
    this.location.back();
  }
}
