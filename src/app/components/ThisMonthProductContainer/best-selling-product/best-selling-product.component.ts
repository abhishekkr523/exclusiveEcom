import { Component, Input } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-best-selling-product',
  templateUrl: './best-selling-product.component.html',
  styleUrl: './best-selling-product.component.scss'
})
export class BestSellingProductComponent {

 @Input() bestSellingProductsData:any;
 @Input() customOptions:any;
}
