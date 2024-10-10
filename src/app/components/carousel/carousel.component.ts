import { Component, Input, input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent  {
  @Input() data: any;

  @Input() carouselType: any;

  @Input() customOptions: any;

  @Input() className: any;





  @Input() exploreProductsdata:any;
  @Input() bestSellingProductsdata:any;

  
  newArrival: any = {

    title1:'Explore Our Products',title2:'Our Products'

  };


  }




