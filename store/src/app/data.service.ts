import { Store } from '././store/store.component';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private stores: Store[] = [{
    id: 1,
    name: 'Windstorm',
    address: 'Minsk',
    time: '10:00 - 19:00'
  }, {
    id: 2,
    name: 'Wind',
    address: 'Minsk',
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
  addStore(id: number, name: string, address: string, time: string) {
    this.stores.push(new Store(id, name, address, time));
  }

  getStores(): Promise<Store[]> {
    return Promise.resolve(this.stores);
  }

  getStore(id: number): Promise<Store> {
    return this.getStores().then(stores => stores.find(store => store.id === id));
  }
}
