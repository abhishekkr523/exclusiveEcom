import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
// import { SidebarCarouselComponent } from './components/sidebar-carousel/sidebar-carousel.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeModule } from './pages/home/home.module';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { OfferProductComponent } from './components/offer-product/offer-product.component';
import { BrowseByCategoriesCarouselComponent } from './components/browse-by-categories-carousel/browse-by-categories-carousel.component';
import { SecondaryHeaderComponent } from './components/secondary-header/secondary-header.component';
import { SidebarComponent } from './pages/home/components/sidebar/sidebar.component';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { MyProfileComponent } from './pages/my-account/components/my-profile/my-profile.component';
import { AddressBookComponent } from './pages/my-account/components/address-book/address-book.component';
import { MyPaymentOptionComponent } from './pages/my-account/components/my-payment-option/my-payment-option.component';
import { MyReturnsComponent } from './pages/my-account/components/my-returns/my-returns.component';
import { MyCancellationsComponent } from './pages/my-account/components/my-cancellations/my-cancellations.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';




import { ExploreProductCardComponent } from './components/card/ExploreProductCard/explore-product-card/explore-product-card.component';
import { BestSellingProductComponent } from './components/ThisMonthProductContainer/best-selling-product/best-selling-product.component';
import { BestProductCardComponent } from './components/card/BestProductCard/best-product-card/best-product-card.component';
import { CheckOutComponent } from './pages/CheckOutPage/check-out/check-out.component';

import { CartListComponent } from './layout/components/cart-list/cart-list.component';
import { WishListPageComponent } from './pages/wish-list-page/wish-list-page.component';
import { WishListCompComponent } from './components/wish-list-comp/wish-list-comp.component';
import { WishListBoxComponent } from './components/card/wish-list-box/wish-list-box.component';
import { WishListBox2Component } from './components/card/wish-list-box2/wish-list-box2.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
// import { BreadcrumbModule} from '@syncfusion/ej2-angular-navigations'
// import {BreadcrumbComponent} from 'xng-breadcrumb'




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // SidebarCarouselComponent,
    LayoutComponent,
    CardComponent,
    CarouselComponent,
    BannerComponent,
    HomeComponent,
    SecondaryHeaderComponent,
    SidebarComponent,
    UserAuthComponent,
    MyAccountComponent,
    MyProfileComponent,
    AddressBookComponent,
    MyPaymentOptionComponent,
    MyReturnsComponent,
    MyCancellationsComponent,
    BreadcrumbComponent,
    NotFoundComponent,
    ContactComponent,
    AboutComponent,
    OfferProductComponent,
    BrowseByCategoriesCarouselComponent,
    ExploreProductCardComponent,
    BestSellingProductComponent,
    BestProductCardComponent,
    CheckOutComponent,
    CartListComponent,
    WishListPageComponent,
    WishListCompComponent,
    WishListBoxComponent,
    WishListBox2Component,
    ProductDetailsComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    // BreadcrumbModule,
    // BreadcrumbComponent
    // HomeModule
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    // BreadcrumbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
