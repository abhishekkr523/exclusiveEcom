import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,    // Enable autoplay
    autoplayTimeout: 3000,  // Time between automatic slides
    autoplayHoverPause: true,  // Pause autoplay on hover
    autoplaySpeed: 1000, 
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      },
      1200: {
        items: 4
      }
    },
    // nav: true
  };
  
  products = [
    {
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      actualPrice:200,
      discount: '-40%',
      rating: 2,
      heartIcon: 'heart.png',
      eyeIcon: 'eye.png',
      productImage: 'joystick.png',
      starIcon: 'star.png',
      percentage: 80,
    },
    {
      title: 'HAVIT HV-G92 Keyboard',
      price: 120,
      actualPrice:200,
      discount: '-40%',
      rating: 4,
      heartIcon: 'heart.png',
      eyeIcon: 'eye.png',
      productImage: 'keyboard.png',
      starIcon: 'star.png',
      percentage: 80,
    },
    {
      title: 'HAVIT HV-G92 Monitor',
      price: 120,
      actualPrice:200,
      discount: '-40%',
      rating: 3,
      heartIcon: 'heart.png',
      eyeIcon: 'eye.png',
      productImage: 'monitor.png',
      starIcon: 'star.png',
      percentage: 80,
    },
    {
      title: 'HAVIT HV-G92 Chair',
      price: 120,
      actualPrice:200,
      discount: '-40%',
      rating: 2,
      heartIcon: 'heart.png',
      eyeIcon: 'eye.png',
      productImage: 'chair.png',
      starIcon: 'star.png',
      percentage: 80,
    },
    
  ];
  showCarousel: boolean = true;

  // Returns an array to dynamically generate filled stars based on the rating
  getFilledStars(rating: number): any[] {
    return new Array(rating);
  }

  // Returns an array to dynamically generate empty stars (5 - rating)
  getEmptyStars(rating: number): any[] {
    return new Array(5 - rating);
  }

  // Function to toggle the view
  toggleViewAll() {
    this.showCarousel = !this.showCarousel; // Toggle the carousel visibility
  }
}
