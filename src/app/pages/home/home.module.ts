import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowseByCategoriesCarouselComponent } from '../../components/browse-by-categories-carousel/browse-by-categories-carousel.component';
import { OfferProductComponent } from '../../components/offer-product/offer-product.component';
// import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CarouselComponent,
    BrowseByCategoriesCarouselComponent,
    OfferProductComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    // SlickCarouselModule
  ],
  exports: [
    BannerComponent,
    CarouselComponent,
    BrowseByCategoriesCarouselComponent,
    OfferProductComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
