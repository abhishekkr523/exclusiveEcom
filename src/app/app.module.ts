import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
// import { SidebarCarouselComponent } from './components/sidebar-carousel/sidebar-carousel.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeModule } from './pages/home/home.module';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { SecondaryHeaderComponent } from './components/secondary-header/secondary-header.component';
import { SidebarComponent } from './pages/home/components/sidebar/sidebar.component';
import { UserAuthComponent } from './pages/user-auth/user-auth.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { MyProfileComponent } from './pages/my-account/components/my-profile/my-profile.component';
import { AddressBookComponent } from './pages/my-account/components/address-book/address-book.component';
import { MyPaymentOptionComponent } from './pages/my-account/components/my-payment-option/my-payment-option.component';
import { MyReturnsComponent } from './pages/my-account/components/my-returns/my-returns.component';
import { MyCancellationsComponent } from './pages/my-account/components/my-cancellations/my-cancellations.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // SidebarCarouselComponent,
    LayoutComponent,
    CardComponent,
    CarouselComponent,
    BannerComponent,
    HomeComponent,
    SecondaryHeaderComponent,
    SidebarComponent,
    UserAuthComponent,
    MyAccountComponent,
    MyProfileComponent,
    AddressBookComponent,
    MyPaymentOptionComponent,
    MyReturnsComponent,
    MyCancellationsComponent,
    BreadcrumbComponent,
    NotFoundComponent,
    ContactComponent,
    AboutComponent,
    
    
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CarouselModule,
    // HomeModule
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    // BreadcrumbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
