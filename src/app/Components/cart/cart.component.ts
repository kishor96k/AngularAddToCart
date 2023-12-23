import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  ngOnInit(): void {
    this.getProducts();
  }
  products: any = [];
  grandTotal!: number;
  constructor(private Cart: CartService) { }
  getProducts() {
    this.Cart.getProducts().subscribe((res) => {
      console.log(res, "get Products");
      this.products = res;
      this.grandTotal = this.Cart.getTotalPrice();
    })
  }
  removeItem(item: any) {
    this.Cart.removeCartItem(item);
    alert("item removed")
    this.getProducts();
  }

  emptyCart(){
    this.Cart.removeAllCartItems();
    alert("all items are removed")
    this.getProducts();
  }

}
