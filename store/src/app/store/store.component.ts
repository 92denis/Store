import { Component, Input } from '@angular/core';

export class Store {
  id: number;
  name: string;
  adress: string;
  time: string;
}

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent {
  @Input() store: Store;
}
