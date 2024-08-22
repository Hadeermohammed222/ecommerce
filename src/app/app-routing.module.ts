import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './users/products/all-products/all-products.component';
import { ProductDetailsComponent } from './users/products/product-details/product-details.component';
import { CartComponent } from './users/Carts/cart/cart.component';
import { AdmainComponent } from './admain/admain/admain.component';
import { MarketComponent } from './admain/market/market.component';
import { HomeComponent } from './component/home/home.component';
import { UpdateProductComponent } from './admain/update-product/update-product.component';
import { SignSignupComponent } from './component/sign-signup/sign-signup.component';

const routes: Routes = [
  {path:'product',component:AllProductsComponent},
  {path:'details/:id',component:ProductDetailsComponent},
  {path:'update/:id',component:UpdateProductComponent},
  {path:'cart',component:CartComponent},
  {path:'home',component:HomeComponent},
  {path:'market',component:MarketComponent},
  {path:'',component:SignSignupComponent},
  {path:'register',component:SignSignupComponent},
  {path:'login',component:SignSignupComponent},
  {path:'logout',component:SignSignupComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
