import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wish-list-box2',
  templateUrl: './wish-list-box2.component.html',
  styleUrl: './wish-list-box2.component.scss'
})
export class WishListBox2Component {

  @Input() product: any = {  }
   // Returns an array to dynamically generate filled stars based on the rating
   getFilledStars(rating: number): any[] {
    return new Array(rating);
  }

  // Returns an array to dynamically generate empty stars (5 - rating)
  getEmptyStars(rating: number): any[] {
    return new Array(5 - rating);
  }


}
