import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreProductCardComponent } from './explore-product-card.component';

describe('ExploreProductCardComponent', () => {
  let component: ExploreProductCardComponent;
  let fixture: ComponentFixture<ExploreProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
