import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookDashboardComponent } from './cook-dashboard.component';

describe('CookDashboardComponent', () => {
  let component: CookDashboardComponent;
  let fixture: ComponentFixture<CookDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
