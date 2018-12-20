import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerFeedDetailComponent } from './manager-feed-detail.component';

describe('ManagerFeedDetailComponent', () => {
  let component: ManagerFeedDetailComponent;
  let fixture: ComponentFixture<ManagerFeedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerFeedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerFeedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
