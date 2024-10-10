import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-best-product-card',
  templateUrl: './best-product-card.component.html',
  styleUrl: './best-product-card.component.scss'
})
export class BestProductCardComponent {
@Input() product:any;

 // Returns an array to dynamically generate filled stars based on the rating
 getFilledStars(rating: number): any[] {
  return new Array(rating);
}

// Returns an array to dynamically generate empty stars (5 - rating)
getEmptyStars(rating: number): any[] {
  return new Array(5 - rating);
}

}
