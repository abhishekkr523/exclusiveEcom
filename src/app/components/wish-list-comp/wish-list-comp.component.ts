import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list-comp',
  templateUrl: './wish-list-comp.component.html',
  styleUrl: './wish-list-comp.component.scss'
})
export class WishListCompComponent implements OnInit{
@Input() wishListProducts:any
@Input() boxType:any

// length = this.wishListProducts.length;
ngOnInit(): void {
  // console.log(this.wishListProducts)
}

justForYou: any = {
  title1: 'Just For You',
};

}
