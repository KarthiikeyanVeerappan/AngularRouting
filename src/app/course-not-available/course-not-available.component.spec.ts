import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNotAvailableComponent } from './course-not-available.component';

describe('CourseNotAvailableComponent', () => {
  let component: CourseNotAvailableComponent;
  let fixture: ComponentFixture<CourseNotAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseNotAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseNotAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
