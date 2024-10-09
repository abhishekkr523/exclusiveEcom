import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-product-card',
  templateUrl: './explore-product-card.component.html',
  styleUrl: './explore-product-card.component.scss'
})
export class ExploreProductCardComponent {

  @Input() product: any = {  };
  @Input() customOptions: any;


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

}
