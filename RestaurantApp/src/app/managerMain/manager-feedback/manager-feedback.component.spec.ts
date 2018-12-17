import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerFeedbackComponent } from './manager-feedback.component';

describe('ManagerFeedbackComponent', () => {
  let component: ManagerFeedbackComponent;
  let fixture: ComponentFixture<ManagerFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
