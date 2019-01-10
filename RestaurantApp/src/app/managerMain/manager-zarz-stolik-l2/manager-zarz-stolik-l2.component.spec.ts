import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerZarzStolikL2Component } from './manager-zarz-stolik-l2.component';

describe('ManagerZarzStolikL2Component', () => {
  let component: ManagerZarzStolikL2Component;
  let fixture: ComponentFixture<ManagerZarzStolikL2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerZarzStolikL2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerZarzStolikL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
