import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCarouselComponent } from './sidebar-carousel.component';

describe('SidebarCarouselComponent', () => {
  let component: SidebarCarouselComponent;
  let fixture: ComponentFixture<SidebarCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
