import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    // console.log('Card Product:', this.product);
  }
  @Input() product: any = {  };
  @Input() simpleProductist: any = {  };
  @Input() simpleProductistContainer:any;
  @Input() carouselType: any;
  @Input() exploreProducts?: string;


  // Returns an array to dynamically generate filled stars based on the rating
  getFilledStars(rating: number): any[] {
    return new Array(rating);
  }

  // Returns an array to dynamically generate empty stars (5 - rating)
  getEmptyStars(rating: number): any[] {
    return new Array(5 - rating);
  }

    // Method to change product image based on selected color
    onColorSelect(selectedColor: any) {
      this.product.productImage = selectedColor.productImage;
    }

    // product save in local storage
    // toggleFavorite(product: any): void {
    //   let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    //   if (this.isFavorite(product)) {
    //     // If already favorite, remove from localStorage
    //     favorites = favorites.filter((p: any) => p.id !== product.id);
    //   } else {
    //     // If not favorite, add to localStorage
    //     favorites.push(product);
    //   }

    //   localStorage.setItem('favorites', JSON.stringify(favorites));
    // }

    // // Method to check if a product is in favorites
    // isFavorite(product: any) {
    //  if(typeof localStorage != 'undefined') {
    //   const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    //   return favorites.some((p: any) => p.id === product.id);
    //  }
    // }
}
