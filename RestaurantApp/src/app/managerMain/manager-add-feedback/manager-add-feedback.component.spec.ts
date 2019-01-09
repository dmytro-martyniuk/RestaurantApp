import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddFeedbackComponent } from './manager-add-feedback.component';

describe('ManagerAddFeedbackComponent', () => {
  let component: ManagerAddFeedbackComponent;
  let fixture: ComponentFixture<ManagerAddFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerAddFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
