import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule, Routes } from '@angular/router';

// Define the routes for HomeComponent
// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent // HomeComponent will be loaded for /home
//   }
// ];
@NgModule({
  declarations: [HomeComponent,BannerComponent,CarouselComponent],
  imports: [
    CommonModule,CarouselModule,
  ],
  exports : [
    BannerComponent,
    CarouselComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class HomeModule { }
