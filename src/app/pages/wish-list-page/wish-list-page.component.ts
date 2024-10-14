import { Component } from '@angular/core';

@Component({
  selector: 'app-wish-list-page',
  templateUrl: './wish-list-page.component.html',
  styleUrl: './wish-list-page.component.scss',
})
export class WishListPageComponent {
  justForYou: any = {
    title1: 'Just For You',
  };

  wishListProducts = [
    {
      title: 'HAVIT HV-G92 Chair',
      price: 120,
      actualPrice: 200,
      discount: '-35%',
      // rating: 2,
      // heartIcon: 'heart.png',
      deleteIcon: 'icon-delete.png',
      productImage: 'earbuds.png',
      // starIcon: 'star.png',
      percentage: 80,
    },
    {
      title: 'HAVIT HV-G92 Chair',
      price: 120,
      actualPrice: 200,
      discount: '-4%',
      // rating: 2,
      // heartIcon: 'heart.png',
      deleteIcon: 'icon-delete.png',
      productImage: 'keyboard.png',
      // starIcon: 'star.png',
      percentage: 80,
    },
    {
      title: 'HAVIT HV-G92 Chair',
      price: 120,
      actualPrice: 200,
      discount: '-40%',
      // rating: 2,
      // heartIcon: 'heart.png',
      deleteIcon: 'icon-delete.png',
      productImage: 'monitor.png',
      // starIcon: 'star.png',
      percentage: 80,
    },
    {
      title: 'HAVIT HV-G92 Chair',
      price: 120,
      actualPrice: 200,
      discount: '-40%',
      // rating: 2,
      // heartIcon: 'heart.png',
      deleteIcon: 'icon-delete.png',
      productImage: 'GP11_PRD3 1.png',
      // starIcon: 'star.png',
      percentage: 80,
    },

  ];

  forYouProducts = [
    {
      title: 'HAVIT HV-G92 Chair',
      price: 120,
      actualPrice: 200,
      discount: '-40%',
      rating: 4,
      // heartIcon: 'heart.png',
      eyeIcon: 'Fill Eye.png',
      productImage: 'GP11_PRD3 1.png',
      starIcon: 'star.png',
      percentage: 80,
    },
    {
      title: 'HAVIT HV-G92 Chair',
      price: 120,
      actualPrice: 200,
      discount: '-40%',
      rating: 2,
      // heartIcon: 'heart.png',
      eyeIcon: 'Fill Eye.png',
      productImage: 'keyboard.png',
      starIcon: 'star.png',
      percentage: 80,
    },
    {
      title: 'HAVIT HV-G92 Chair',
      price: 120,
      actualPrice: 200,
      discount: 'New',
      rating: 4,
      // heartIcon: 'heart.png',
      eyeIcon: 'Fill Eye.png',
      productImage: 'joystick.png',
      starIcon: 'star.png',
      percentage: 80,
    },
    {
      title: 'HAVIT HV-G92 Chair',
      price: 120,
      actualPrice: 200,
      discount: '-40%',
      rating: 5,
      // heartIcon: 'heart.png',
      eyeIcon: 'Fill Eye.png',
      productImage: 'chair.png',
      starIcon: 'star.png',
      percentage: 80,
    },
  ];
}
