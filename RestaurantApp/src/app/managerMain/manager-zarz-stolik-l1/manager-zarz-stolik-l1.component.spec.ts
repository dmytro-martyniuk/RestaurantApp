import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerZarzStolikL1Component } from './manager-zarz-stolik-l1.component';

describe('ManagerZarzStolikL1Component', () => {
  let component: ManagerZarzStolikL1Component;
  let fixture: ComponentFixture<ManagerZarzStolikL1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerZarzStolikL1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerZarzStolikL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
