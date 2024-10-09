import { Component, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-browse-by-categories-carousel',
  templateUrl: './browse-by-categories-carousel.component.html',
  styleUrl: './browse-by-categories-carousel.component.scss',
})
export class BrowseByCategoriesCarouselComponent {
  @Input() category: any = {};


  isSelected = false;


  selectCategory(category: any) {
     
    this.isSelected = !this.isSelected;

  }

}
