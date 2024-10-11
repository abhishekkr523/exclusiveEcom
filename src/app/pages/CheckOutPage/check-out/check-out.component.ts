import { Component } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent {
products:any=[
  {
    "id": 1,
    "name": "Product 1",
    "price": 10.99,
    "quantity": 2,
    "image":"chair.png"
  },
  {
    "id": 1,
    "name": "Product 1",
    "price": 10.99,
    "quantity": 2,
    "image":"chair.png"
  },
]
}
