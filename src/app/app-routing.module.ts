import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { MyProfileComponent } from './pages/my-account/components/my-profile/my-profile.component';
import { MyPaymentOptionComponent } from './pages/my-account/components/my-payment-option/my-payment-option.component';
import { MyReturnsComponent } from './pages/my-account/components/my-returns/my-returns.component';
import { MyCancellationsComponent } from './pages/my-account/components/my-cancellations/my-cancellations.component';
import { AddressBookComponent } from './pages/my-account/components/address-book/address-book.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { CartListComponent } from './layout/components/cart-list/cart-list.component';
import { CheckOutComponent } from './pages/CheckOutPage/check-out/check-out.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', 
    data: { breadcrumb: { alias: 'Home' } },
    children : [
      { path: '', component: HomeComponent },
      {
        path: 'myAccount',
        component: MyAccountComponent,
        data: { breadcrumb: { alias: 'My Account' } }, // Only set alias here
        children: [
          
          {
            path: '',
            redirectTo: 'myProfile',
            pathMatch: 'full',
          },
          {
            path: 'myProfile',
            component: MyProfileComponent,
            data: { breadcrumb: { alias: 'My Profile' } }, // No parent reference needed
          },
          {
            path: 'myAddressBook',
            component: AddressBookComponent,
            data: { breadcrumb: { alias: 'Address Book' } },
          },
          {
            path: 'myPaymentOptions',
            component: MyPaymentOptionComponent,
            data: { breadcrumb: { alias: 'Payment Options' } },
          },
          {
            path: 'myReturns',
            component: MyReturnsComponent,
            data: { breadcrumb: { alias: 'Returns' } },
          },
          {
            path: 'myCancellations',
            component: MyCancellationsComponent,
            data: { breadcrumb: { alias: 'Cancellations' } },
          },
        ],
      },
      { path: 'cart',
        data: { breadcrumb: { alias: 'Cart' } ,},
       children:[
        {
          path:'',component:CartListComponent
        },
        {
          path:'checkout',component:CheckOutComponent,
          data: { breadcrumb: { alias: 'Checkout' } }
        },
       ]
      },
     
    ]
   },
   
  { path: 'userAuth', component: UserAuthComponent },
 
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: '404', component: NotFoundComponent }, // Added 404 component route
  { path: '**', redirectTo: '404' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
