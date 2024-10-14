import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListBoxComponent } from './wish-list-box.component';

describe('WishListBoxComponent', () => {
  let component: WishListBoxComponent;
  let fixture: ComponentFixture<WishListBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishListBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
