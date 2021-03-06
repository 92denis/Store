import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Store } from '../store';
import { Product } from '../product';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  stores: Store[];
  products: Product[];
  @Input() product: Product;
  storeId: number;
  id: string;
  name: string;
  price: number;
  count: number;

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute, private location: Location) {
    this.storeId = parseInt(this.route.snapshot.params['id']);
  }

  getProducts(): void {
    this.products = this.dataService.getProductsByStoreId(this.storeId);
  }

  ngOnInit(): void {
    this.getProducts();
    this.route.paramMap
      .switchMap((params: ParamMap) => this.dataService.getProduct(params.get('id')))
      .subscribe(product => this.product = product);
  }

  addItem(storeId: number, id: string, name: string, price: number, count: number) {
    storeId = this.storeId;
    let getId: string = '_' + Math.random().toString(36).substr(2, 9);
    id = this.products.length != 0 ? this.products[this.products.length - 1].id +  Math.random(): getId;
    this.dataService.addProduct(storeId, id, name, price, count);
    this.products = this.dataService.getProductsByStoreId(this.storeId);
  }
  delProduct(product: Product) {
    this.dataService.deleteProduct(product);
    this.products = this.dataService.getProductsByStoreId(this.storeId);
  }
  editProduct(id: number): void {
    this.router.navigate(['/edit-product', id]);
    console.log(id);
  }
  goBack(): void {
    this.location.back();
  }
}
