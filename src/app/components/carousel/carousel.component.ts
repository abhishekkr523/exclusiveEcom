import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() data: any;
  @Input() carouselType: any;
  @Input() customOptions: any;
  @Input() className: any;
  @Input() anualData: any;
  @Input() exploreProductsdata: any;
  @Input() bestSellingProductsdata: any;
  @Input() customClass:any;

  newArrival: any = {
    title1: 'Explore Our Products',
    title2: 'Our Products'
  };

  constructor() {
    // Avoid accessing @Input() properties here as they are not initialized yet
  }

  ngOnInit(): void {
    // Now @Input properties should be initialized
    console.log("anualData:", this.anualData);
    console.log("data:", this.data);
    console.log("carouselType:", this.carouselType);
  }
}
