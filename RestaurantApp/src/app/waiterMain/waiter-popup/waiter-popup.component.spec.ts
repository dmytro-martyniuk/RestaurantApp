import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterPopupComponent } from './waiter-popup.component';

describe('WaiterPopupComponent', () => {
  let component: WaiterPopupComponent;
  let fixture: ComponentFixture<WaiterPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiterPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
