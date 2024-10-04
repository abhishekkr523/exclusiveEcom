import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarCarouselComponent } from './components/main/sidebar-carousel/sidebar-carousel.component';

const routes: Routes = [
  {path: 'SidebarCarousel', component: SidebarCarouselComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
