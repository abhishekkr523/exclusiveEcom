import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListBox2Component } from './wish-list-box2.component';

describe('WishListBox2Component', () => {
  let component: WishListBox2Component;
  let fixture: ComponentFixture<WishListBox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishListBox2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishListBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
