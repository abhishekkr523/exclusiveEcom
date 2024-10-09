import { Component, ViewChild } from '@angular/core';
import { CarouselComponent } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-browse-by-categories-carousel',
  templateUrl: './browse-by-categories-carousel.component.html',
  styleUrl: './browse-by-categories-carousel.component.scss',
})
export class BrowseByCategoriesCarouselComponent {
  @ViewChild('carousel') carousel!: CarouselComponent;
  categories = [
    { name: 'Phones', icon: 'Category-CellPhone.png' },
    { name: 'Computers', icon: 'Category-Computer.png' },
    { name: 'SmartWatch', icon: 'Category-SmartWatch.png' },
    { name: 'Camera', icon: 'Category-Camera.png' },
    { name: 'HeadPhones', icon: 'Category-Headphone.png' },
    { name: 'Gaming', icon: 'Category-Gamepad.png' },
  ];

  selectedCategory: string = 'Camera';


  // Function to handle selection by name
  onSelectCategory(name: string) {
    this.selectedCategory = name; // update selected category name
  }
  showCarousel: boolean = true; // Control visibility of the carousel
  showControls: boolean = true; // Control visibility of navigation arrows

  customOptions: any = {
    loop: true, // Enable looping
    margin: 10,
    nav: true, // Enable navigation arrows
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

}
