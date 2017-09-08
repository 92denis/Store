import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Store } from '../store';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  products: Product[];
  @Input() storeId: number;

  constructor(private dataService: DataService) { }

  getProducts(): void {
    this.products = this.dataService.getProductsByStoreId(this.storeId);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  addItem(storeId: number, id: number, name: string, price: number, count: number) {
    storeId = this.storeId;
    id = this.products[this.products.length - 1].id + 1;
    this.dataService.addProduct(storeId, id, name, price, count);
  }
}
