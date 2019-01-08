import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterDishListComponent } from './waiter-dish-list.component';

describe('WaiterDishListComponent', () => {
  let component: WaiterDishListComponent;
  let fixture: ComponentFixture<WaiterDishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiterDishListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterDishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
