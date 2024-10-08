import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
   fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes",
    "Pineapple",
    "Strawberry",
    "Blueberry",
    "Peach",
    "Watermelon",
    "Kiwi",
    "Pomegranate",
    "Papaya",
    "Cherry",
    "Lemon",
    "Coconut",
    "Pear",
    "Plum",
    "Guava",
    "Apricot"
  ];
  products = [
    {
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      actualPrice: 200,
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
      actualPrice: 200,
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
      actualPrice: 200,
      discount: '-40%',
      rating: 3,
      heartIcon: 'heart.png',
      eyeIcon: 'eye.png',
      productImage: 'monitor.png',
      starIcon: 'star.png',
      percentage: 80,
    },
    {
      title: 'HAVIT HV-G92 Monitor',
      price: 120,
      actualPrice: 200,
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
      actualPrice: 200,
      discount: '-40%',
      rating: 2,
      heartIcon: 'heart.png',
      eyeIcon: 'eye.png',
      productImage: 'chair.png',
      starIcon: 'star.png',
      percentage: 80,
    },
    {
      title: 'HAVIT HV-G92 Gamepad',
      price: 120,
      actualPrice: 200,
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
      actualPrice: 200,
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
      actualPrice: 200,
      discount: '-40%',
      rating: 3,
      heartIcon: 'heart.png',
      eyeIcon: 'eye.png',
      productImage: 'monitor.png',
      starIcon: 'star.png',
      percentage: 80,
    },
    {
      title: 'HAVIT HV-G92 Monitor',
      price: 120,
      actualPrice: 200,
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
      actualPrice: 200,
      discount: '-40%',
      rating: 2,
      heartIcon: 'heart.png',
      eyeIcon: 'eye.png',
      productImage: 'chair.png',
      starIcon: 'star.png',
      percentage: 80,
    },
    {
      title: 'HAVIT HV-G92 Chair',
      price: 120,
      actualPrice: 200,
      discount: '-40%',
      rating: 2,
      heartIcon: 'heart.png',
      eyeIcon: 'eye.png',
      productImage: 'chair.png',
      starIcon: 'star.png',
      percentage: 80,
    },
  ];
  salesData: any = {
    title1: 'Today\'s',
    title2: 'Flash Sales',
    timeUnits: [
      { title: 'Days', duration: '03' },
      { title: 'Hours', duration: '03' },
      { title: 'Minutes', duration: '03' },
      { title: 'Seconds', duration: '03' }
    ]
  };
  newArrival: any = {
    title1: 'Featured',
    title2: 'New Arrival',
    
  };
  productCustomOption ={
    loop: false,
    // mouseDrag: true,
    // touchDrag: true,
    // pullDrag: true,
    dots: true,
    // navSpeed: 700,
    autoplay: false,    // Enable autoplay
    // autoplayTimeout: 3000,  // Time between automatic slides
    // autoplayHoverPause: true,  // Pause autoplay on hover
    // autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1200: {
        items: 5,
      },
      // 1478: {
      //   items: 5
      // }
    },
    nav: true,
  }

  navCustomOption={
    loop: false,
    // mouseDrag: true,
    // touchDrag: true,
    // pullDrag: true,
    dots: true,
    // navSpeed: 700,
    autoplay: false,    // Enable autoplay
    // autoplayTimeout: 3000,  // Time between automatic slides
    // autoplayHoverPause: true,  // Pause autoplay on hover
    // autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 4,
      },
      900: {
        items: 6,
      },
      1200: {
        items: 8,
      },
      // 1478: {
      //   items: 5
      // }
    },
    nav: true,
  }

  handleCrauselNav(buttomType:string){
    const previousButton:any= document.getElementsByClassName(buttomType);
    previousButton[0].click()
  }
}
