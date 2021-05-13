import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAvailableComponent } from './course-available.component';

describe('CourseAvailableComponent', () => {
  let component: CourseAvailableComponent;
  let fixture: ComponentFixture<CourseAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
