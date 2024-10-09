import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {
  ngOnInit(): void {
    this.carouselItems = this.getRandomCarouselItems();
  }
  carouselItems = [
    {
      title: 'iPhone 14 Series',
      description: 'Up to 10% off Voucher',
      shopNowText: 'Shop Now',
      icon: 'apple.png',
      image: 'phone.png',
      buttonIcon: 'Vector (6).png'
    },
    // {
    //   title: 'MacBook Pro',
    //   description: 'Save up to 50%',
    //   shopNowText: 'Buy Now',
    //   icon: 'apple.png',
    //   image: 'mac.png',
    //   buttonIcon: 'Vector (6).png'
    // },
    // {
    //   title: 'AirPods Pro',
    //   description: 'Free Shipping',
    //   shopNowText: 'Shop Now',
    //   icon: 'apple.png',
    //   image: 'phone.png',
    //   buttonIcon: 'Vector (6).png'
    // }
  ];

  // You can shuffle the array to make it random
  getRandomCarouselItems() {
    return this.carouselItems.sort(() => 0.5 - Math.random());
  }
}
