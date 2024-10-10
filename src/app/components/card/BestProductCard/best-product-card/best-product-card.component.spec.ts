import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestProductCardComponent } from './best-product-card.component';

describe('BestProductCardComponent', () => {
  let component: BestProductCardComponent;
  let fixture: ComponentFixture<BestProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
