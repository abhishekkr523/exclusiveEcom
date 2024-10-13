import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CheckOutComponent } from './pages/CheckOutPage/check-out/check-out.component';
import { CartComponent } from './components/Cart/cart/cart.component';
import { MyaccountComponent } from './components/Myacount/myaccount/myaccount.component';
import { CartListComponent } from './layout/components/cart-list/cart-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '404'},
  {path: 'cartList', component: CartListComponent},
  // {path: 'account/myaccount/product/viewcart/checkout',component:CheckOutComponent },
  // { path: 'viewcart', component: CartComponent, data: { breadcrumb: 'View Cart' } },
  { path: 'account/myaccount/product/cart/checkout', component: CheckOutComponent, data: { breadcrumb: 'Checkout' } },
  { path: 'account', component: MyaccountComponent, data: { breadcrumb: 'Account' }},
  // { path: 'account/myaccount', component: MyAccountComponent, data: { breadcrumb: 'My Account' } },
  // { path: 'account/myaccount/product', component: ProductComponent, data: { breadcrumb: 'Product' } },


]
// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },
//   {
//     path: 'home',
//     loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
//   },
//   { path: '**', redirectTo: '404' }  // Keep this to handle unknown paths
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
