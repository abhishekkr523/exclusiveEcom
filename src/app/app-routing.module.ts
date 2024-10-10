import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartListComponent } from './layout/components/cart-list/cart-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cartList', component: CartListComponent},
  {path: '**', redirectTo: '404'}
];
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
