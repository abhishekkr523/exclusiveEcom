import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrl: './secondary-header.component.scss'
})
export class SecondaryHeaderComponent {

  @Input() salesData:any
  @Input() showCarouselButton:any;
  ngOnInit(): void {
    console.log("kkk",this.salesData)
  }

  handleCrauselNav(buttomType:string){
    const previousButton:any= document.getElementsByClassName(buttomType);
    previousButton[0].click()
  }
}
