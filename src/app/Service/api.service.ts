import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  path: any = "https://fakestoreapi.com/products";
  constructor(private Http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.Http.get(this.path).pipe(map((res: any) => {
      return res;
    }))
  }

}
