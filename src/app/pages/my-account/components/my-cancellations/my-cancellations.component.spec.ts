import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCancellationsComponent } from './my-cancellations.component';

describe('MyCancellationsComponent', () => {
  let component: MyCancellationsComponent;
  let fixture: ComponentFixture<MyCancellationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCancellationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCancellationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
