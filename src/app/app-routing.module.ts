import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { CartComponent } from './Components/cart/cart.component';

const routes: Routes = [{
  path: "products",
  component: ProductsComponent
}, {
  path: "cart",
  component: CartComponent
}, {
  path: "",
  redirectTo: "products",
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
