import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Store} from '../store';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  products: Product[];
  stores: Store[];

  constructor(private dataService: DataService) { }

  getProducts(): void {
    this.dataService.getProducts().then(products => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  addItem(id: number, name: string, price: number, count: number) {
    id = this.products[this.products.length - 1].id + 1;
    this.dataService.addProduct(id, name, price, count);
  }
}
