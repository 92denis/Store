import { Store } from '././store/store.component';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private stores: Store[] = [{
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

  update(store: Store) {
    for (let i = 0; i < this.stores.length; i++) {
      if (this.stores[i].id === store.id) {
        this.stores.splice(i, 1, store);
        break;
      }
    }
  }

  getStores(): Promise<Store[]> {
    return Promise.resolve(this.stores);
  }

  getStore(id: number): Promise<Store> {
    return this.getStores().then(stores => stores.find(store => store.id === id));
  }
}
