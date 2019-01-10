import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerZarzStolikL4Component } from './manager-zarz-stolik-l4.component';

describe('ManagerZarzStolikL4Component', () => {
  let component: ManagerZarzStolikL4Component;
  let fixture: ComponentFixture<ManagerZarzStolikL4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerZarzStolikL4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerZarzStolikL4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
