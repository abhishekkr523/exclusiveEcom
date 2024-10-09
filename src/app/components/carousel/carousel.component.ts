import { Component, Input, input, OnInit } from '@angular/core';
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


  ngOnInit(): void {


    // console.log('ooo', this.data);


  }



}
