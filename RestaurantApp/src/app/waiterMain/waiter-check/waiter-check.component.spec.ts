import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterCheckComponent } from './waiter-check.component';

describe('WaiterCheckComponent', () => {
  let component: WaiterCheckComponent;
  let fixture: ComponentFixture<WaiterCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiterCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
