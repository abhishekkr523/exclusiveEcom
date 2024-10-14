import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPaymentOptionComponent } from './my-payment-option.component';

describe('MyPaymentOptionComponent', () => {
  let component: MyPaymentOptionComponent;
  let fixture: ComponentFixture<MyPaymentOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyPaymentOptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPaymentOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
