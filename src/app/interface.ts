export interface Productist{
    
    title: string;
    price: number;
    actualPrice: number;
    discount: string;
    rating: number;
    heartIcon: string;
    eyeIcon: string;
    productImage: string;
    starIcon: string;
    percentage: number;
    colorArray: Color[];

}
export interface Color {
    color: string;
    productImage: string;
  }