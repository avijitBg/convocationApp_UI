import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAttendingComponent } from './not-attending.component';

describe('NotAttendingComponent', () => {
  let component: NotAttendingComponent;
  let fixture: ComponentFixture<NotAttendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotAttendingComponent]
    });
    fixture = TestBed.createComponent(NotAttendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
