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
  @Input() customeClass1:any;
  @Input() customeClass2:any;
  @Input() customeClass3:any;
  @Input() customeClass4:any;
  @Input() customeClass5:any;

  // // Returns an array to dynamically generate filled stars based on the rating
  // getFilledStars(rating: number): any[] {
  //   return new Array(rating);
  // }

  // // Returns an array to dynamically generate empty stars (5 - rating)
  // getEmptyStars(rating: number): any[] {
  //   return new Array(5 - rating);
  // }

  // Returns an array to dynamically generate filled stars based on the rating (clamped between 0 and 5)
getFilledStars(rating: number): any[] {
  const validRating = this.validateRating(rating); // Ensure rating is between 0 and 5
  return new Array(validRating);
}

// Returns an array to dynamically generate empty stars (5 - validRating)
getEmptyStars(rating: number): any[] {
  const validRating = this.validateRating(rating); // Ensure rating is between 0 and 5
  return new Array(5 - validRating);
}

// Helper method to validate and clamp rating between 0 and 5
validateRating(rating: number): number {
  if (typeof rating !== 'number' || isNaN(rating) || rating < 0) {
    return 0; // Default to 0 if rating is invalid
  }
  return Math.min(Math.max(rating, 0), 5); // Ensure rating is between 0 and 5
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
