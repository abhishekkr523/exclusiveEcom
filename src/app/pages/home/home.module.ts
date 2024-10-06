import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [HomeComponent,BannerComponent,CarouselComponent],
  imports: [
    CommonModule,CarouselModule
  ],
  exports : [
    BannerComponent,
    CarouselComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class HomeModule { }
