import { Store } from './store';
import { Product } from './product';
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

  private products: Product[] = [{
    storeId: 1,
    id: 1,
    name: 'Стол',
    price: 125,
    count: 23
  }, {
    storeId: 2,
    id: 1,
    name: 'Стул',
    price: 342,
    count: 54
  }];

  addProduct(storeId: number, id: number, name: string, price: number, count: number) {
    this.products.push(new Product(storeId, id, name, price, count));
  }

  addStore(id: number, name: string, address: string, time: string) {
    this.stores.push(new Store(id, name, address, time));
  }

  deleteStore(store: Store) {
    for (let i = 0; i < this.stores.length; i++) {
      if (this.stores[i].id === store.id) {
        this.stores.splice(i, 1);
        break;
      }
    }
  }

  getStores(): Promise<Store[]> {
    return Promise.resolve(this.stores);
  }
  getProductsByStoreId(storeId: number): Product[] {
    return this.products.filter(product => product.storeId === storeId);
  }
  deleteProduct(product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === product.id) {
        this.products.splice(i, 1);
        break;
      }
    }
  }

  getProducts(): Promise<Product[]> {
    return Promise.resolve(this.products);
  }
  getStore(id: number): Promise<Store> {
    return this.getStores().then(stores => stores.find(store => store.id === id));
  }
}
