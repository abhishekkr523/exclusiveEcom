import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  hide!: boolean;
  fruits = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Grapes',
    'Pineapple',
    'Strawberry',
    'Blueberry',
    'Peach',
    'Watermelon',
    'Kiwi',
    'Pomegranate',
    'Papaya',
    'Cherry',
    'Lemon',
    'Coconut',
    'Pear',
    'Plum',
    'Guava',
    'Apricot',
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

  categoryList = [
    { name: 'Phones', icon: 'Category-CellPhone.png' },
    { name: 'Computers', icon: 'Category-Computer.png' },
    { name: 'SmartWatch', icon: 'Category-SmartWatch.png' },
    { name: 'Camera', icon: 'Category-Camera.png' },
    { name: 'HeadPhones', icon: 'Category-Headphone.png' },
    { name: 'Gaming', icon: 'Category-Gamepad.png' },
  ];

  categoriesCustomOption = {
    loop: true,
    // mouseDrag: true,
    // touchDrag: true,
    // pullDrag: true,
    dots: false,
    // navSpeed: 700,
    // autoplay: true,    // Enable autoplay
    // autoplayTimeout: 3000,  // Time between automatic slides
    // autoplayHoverPause: true,  // Pause autoplay on hover
    // autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      300: {
        items: 2,
      },
      600: {
        items: 4,
      },
      900: {
        items: 5,
      },
      1200: {
        items: 6,
      },
      // 1478: {
      //   items: 5
      // }
    },
    nav: false,
  };

  bestSellingProducts = [
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
  exploreProductsdata = [
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
      colorArray: [
        {
          color: 'red',
          productImage: 'chair.png',
        },
        {
          color: 'blue',
          productImage: 'keyboard.png',
        },
      ],
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
      colorArray: [
        {
          color: 'red',
          productImage: 'chair.png',
        },
        {
          color: 'blue',
          productImage: 'keyboard.png',
        },
      ],
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
      colorArray: [
        {
          color: 'red',
          productImage: 'chair.png',
        },
        {
          color: 'blue',
          productImage: 'keyboard.png',
        },
      ],
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
      colorArray: [
        {
          color: 'red',
          productImage: 'chair.png',
        },
        {
          color: 'blue',
          productImage: 'keyboard.png',
        },
      ],
    },
  ];
  salesData: any = {
    title1: "Today's",
    title2: 'Flash Sales',
    title3: 'Our Products',
    timeUnits: [
      { title: 'Days', duration: '03' },
      { title: 'Hours', duration: '03' },
      { title: 'Minutes', duration: '03' },
      { title: 'Seconds', duration: '03' },
    ],
  };

  exploreProducts: any = {
    title1: 'Our Products',
    title2: 'Explore Our Products',
  };
  header: any = {
    title1: 'This Month',
    title2: 'Best Selling Products',
  };
  newArrival: any = {
    title1: 'Featured',
    title2: 'New Arrival',
    title3: 'Explore Our Products',
  };
  categoryByBro: any = {
    title1: 'Categories',
    title2: 'Browser By Category',
  };
  productCustomOption = {
    loop: false,
    // mouseDrag: true,
    // touchDrag: true,
    // pullDrag: true,
    dots: false,
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
    nav: false,
  };

  // browserByCategoy={
  //   title1: 'Categories',
  //   title2: 'Browser By Category',
  // }

  navCustomOption = {
    loop: false,
    // mouseDrag: true,
    // touchDrag: true,
    // pullDrag: true,
    dots: false,
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
  };

  handleCrauselNav(buttomType: string) {
    const previousButton: any = document.getElementsByClassName(buttomType);
    previousButton[0].click();
  }
}
