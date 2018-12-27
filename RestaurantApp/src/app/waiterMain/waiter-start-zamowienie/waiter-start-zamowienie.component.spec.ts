import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterStartZamowienieComponent } from './waiter-start-zamowienie.component';

describe('WaiterStartZamowienieComponent', () => {
  let component: WaiterStartZamowienieComponent;
  let fixture: ComponentFixture<WaiterStartZamowienieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaiterStartZamowienieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterStartZamowienieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
