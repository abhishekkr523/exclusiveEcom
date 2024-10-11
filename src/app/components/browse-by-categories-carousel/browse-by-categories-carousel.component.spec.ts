import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseByCategoriesCarouselComponent } from './browse-by-categories-carousel.component';

describe('BrowseByCategoriesCarouselComponent', () => {
  let component: BrowseByCategoriesCarouselComponent;
  let fixture: ComponentFixture<BrowseByCategoriesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowseByCategoriesCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseByCategoriesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
