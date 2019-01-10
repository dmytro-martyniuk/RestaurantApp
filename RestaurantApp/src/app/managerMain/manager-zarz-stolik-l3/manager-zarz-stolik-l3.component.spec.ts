import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerZarzStolikL3Component } from './manager-zarz-stolik-l3.component';

describe('ManagerZarzStolikL3Component', () => {
  let component: ManagerZarzStolikL3Component;
  let fixture: ComponentFixture<ManagerZarzStolikL3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerZarzStolikL3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerZarzStolikL3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
