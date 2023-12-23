import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  public cardItemList: any = [];
  public productItemList = new BehaviorSubject<any>([]);

  getProducts() {
    return this.productItemList.asObservable();
  }

  setProducts(prod: any) {
    this.cardItemList.push(...prod);
    this.productItemList.next(prod);
  }

  addToCart(prod: any) {
    this.cardItemList.push(prod);
    this.productItemList.next(this.cardItemList);
    this.getTotalPrice();
    console.log(this.cardItemList);

  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cardItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(prod: any) {
    this.cardItemList.map((a: any, index: any) => {
      if (prod.id === a.id) {
        this.cardItemList.splice(index, 1);
      }
    })
    this.productItemList.next(this.cardItemList);
  }

  removeAllCartItems() {
    this.cardItemList = [];
    this.productItemList.next(this.cardItemList);
  }


}
