import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterAddDishComponent } from './waiter-add-dish.component';

describe('WaiterAddDishComponent', () => {
  let component: WaiterAddDishComponent;
  let fixture: ComponentFixture<WaiterAddDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiterAddDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterAddDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
