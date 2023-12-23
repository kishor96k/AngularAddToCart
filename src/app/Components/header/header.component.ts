import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    this.getAllProducts();
  }
  constructor(
    private cart: CartService
  ) { }
  public totalItem: number = 0;

  ProductList: any;

  getAllProducts() {
    this.cart.getProducts().subscribe((res) => {
      console.log(res,"product count");
      this.totalItem = res.length;
    })
  }

}
