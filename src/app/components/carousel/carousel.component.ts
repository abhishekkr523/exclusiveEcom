import { Component, Input, input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
   styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  
  @Input() data:any
 
  @Input() exploreProductsdata:any;
 
  @Input() carouselType:any ;

  @Input() customOptions: any;


  ngOnInit(): void {
    this.loadProducts();
   

    // console.log('ooo', this.products);
   
  }
  loadProducts() {
    // Fetch or initialize your products here
    
    // console.log('Products loaded:', this.products);
  }
  

 
}
