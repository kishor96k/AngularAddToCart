import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  ngOnInit(): void {
    this.getProducts();
  }

  constructor(
    private api: ApiService,
    private cart: CartService
  ) { }

  ProductDetails: any;
  getProducts() {
    this.api.getProducts().subscribe((res) => {
      console.log(res,"products all ");
      this.ProductDetails = res;
      this.ProductDetails.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      })
    })
  }

  addToCart(item: any) {
    this.cart.addToCart(item);
  }

}
