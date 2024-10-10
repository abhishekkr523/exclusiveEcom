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
import { SecondaryHeaderComponent } from './components/secondary-header/secondary-header.component';

import { ExploreProductCardComponent } from './components/card/ExploreProductCard/explore-product-card/explore-product-card.component';
import { BestSellingProductComponent } from './components/ThisMonthProductContainer/best-selling-product/best-selling-product.component';
import { BestProductCardComponent } from './components/card/BestProductCard/best-product-card/best-product-card.component';





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
    ExploreProductCardComponent,
    SecondaryHeaderComponent,
    BestSellingProductComponent,
    BestProductCardComponent    
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    // HomeModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
