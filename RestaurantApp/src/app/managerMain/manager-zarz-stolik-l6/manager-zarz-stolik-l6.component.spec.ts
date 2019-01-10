import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerZarzStolikL6Component } from './manager-zarz-stolik-l6.component';

describe('ManagerZarzStolikL6Component', () => {
  let component: ManagerZarzStolikL6Component;
  let fixture: ComponentFixture<ManagerZarzStolikL6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerZarzStolikL6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerZarzStolikL6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
