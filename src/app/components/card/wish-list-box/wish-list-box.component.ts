import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wish-list-box',
  templateUrl: './wish-list-box.component.html',
  styleUrl: './wish-list-box.component.scss'
})
export class WishListBoxComponent {

  @Input() product: any = {  }

 
}
