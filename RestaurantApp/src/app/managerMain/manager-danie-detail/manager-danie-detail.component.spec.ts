import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDanieDetailComponent } from './manager-danie-detail.component';

describe('ManagerDanieDetailComponent', () => {
  let component: ManagerDanieDetailComponent;
  let fixture: ComponentFixture<ManagerDanieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerDanieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerDanieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
