import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotEligibleComponent } from './not-eligible.component';

describe('NotEligibleComponent', () => {
  let component: NotEligibleComponent;
  let fixture: ComponentFixture<NotEligibleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotEligibleComponent]
    });
    fixture = TestBed.createComponent(NotEligibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
