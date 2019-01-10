import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerZarzStolikL5Component } from './manager-zarz-stolik-l5.component';

describe('ManagerZarzStolikL5Component', () => {
  let component: ManagerZarzStolikL5Component;
  let fixture: ComponentFixture<ManagerZarzStolikL5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerZarzStolikL5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerZarzStolikL5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
