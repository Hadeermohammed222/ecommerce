import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AllProductsComponent } from './users/products/all-products/all-products.component';
import { ProductDetailsComponent } from './users/products/product-details/product-details.component';
import { CartComponent } from './users/Carts/cart/cart.component';
import { HeaderComponent } from './users/shared/header/header.component';
import { SpinnerComponent } from './users/shared/spinner/spinner.component';
import { SelectComponent } from './users/shared/select/select.component';
import { ProductComponent } from './users/shared/product/product.component';
import { AdmainComponent } from './admain/admain/admain.component';
import { MarketComponent } from './admain/market/market.component';
import { HomeComponent } from './component/home/home.component';
import { UpdateProductComponent } from './admain/update-product/update-product.component';
import { SignSignupComponent } from './component/sign-signup/sign-signup.component';


@NgModule
({
  declarations: [
    AppComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    ProductComponent,
    AdmainComponent,
    MarketComponent,
    HomeComponent,
    UpdateProductComponent,
    SignSignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
