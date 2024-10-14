import { Component, Input, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-best-selling-product',
  templateUrl: './best-selling-product.component.html',
  styleUrl: './best-selling-product.component.scss'
})
export class BestSellingProductComponent implements OnInit {

 @Input() bestSellingProductsData:any;
 @Input() customOptions:any;

ngOnInit(): void {
    // console.log('tarun pareta',this.bestSellingProductsData)
}
}
