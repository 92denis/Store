import { Store } from '././store/store.component';

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

  getData(): Store[] {
    return this.stores;
  }
}
