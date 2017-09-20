import { DataService } from '../data.service';
import { Subscription } from 'rxjs/Subscription';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  @Input() product: Product;
  constructor(private dataService: DataService, private route: ActivatedRoute,
    private location: Location) {

  }
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.dataService.getProduct(params.get('id')))
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

}
