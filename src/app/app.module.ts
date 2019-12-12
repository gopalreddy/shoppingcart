import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MainnavComponent } from './components/shared/mainnav/mainnav.component';
import { MainsliderComponent } from './components/shared/mainslider/mainslider.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { LatestProductsComponent } from './components/products/latest-products/latest-products.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { SitepromoComponent } from './components/shared/sitepromo/sitepromo.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainnavComponent,
    MainsliderComponent,
    CartComponent,
    ProductsComponent,
    ProductDetailComponent,
    HomeComponent,
    LatestProductsComponent,
    SitepromoComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
