import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterZamowienieComponent } from './waiter-zamowienie.component';

describe('WaiterZamowienieComponent', () => {
  let component: WaiterZamowienieComponent;
  let fixture: ComponentFixture<WaiterZamowienieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiterZamowienieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterZamowienieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
