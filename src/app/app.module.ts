import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
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
    OfferProductComponent,
    BrowseByCategoriesCarouselComponent

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
