import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddDanieComponent } from './manager-add-danie.component';

describe('ManagerAddDanieComponent', () => {
  let component: ManagerAddDanieComponent;
  let fixture: ComponentFixture<ManagerAddDanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerAddDanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddDanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
