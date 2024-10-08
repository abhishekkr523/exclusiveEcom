import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'] 
})
export class CardComponent  implements OnInit{
  ngOnInit(): void {
    console.log('Card Product:', this.product); 
  }
  @Input() product: any = {};


   // Returns an array to dynamically generate filled stars based on the rating
   getFilledStars(rating: number): any[] {
    return new Array(rating);
  }

  // Returns an array to dynamically generate empty stars (5 - rating)
  getEmptyStars(rating: number): any[] {
    return new Array(5 - rating);
  }
}
