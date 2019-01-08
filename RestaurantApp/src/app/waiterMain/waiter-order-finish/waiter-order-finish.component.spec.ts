import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterOrderFinishComponent } from './waiter-order-finish.component';

describe('WaiterOrderFinishComponent', () => {
  let component: WaiterOrderFinishComponent;
  let fixture: ComponentFixture<WaiterOrderFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiterOrderFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterOrderFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
