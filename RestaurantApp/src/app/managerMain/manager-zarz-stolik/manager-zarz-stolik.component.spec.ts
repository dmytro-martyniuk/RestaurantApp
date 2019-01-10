import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerZarzStolikComponent } from './manager-zarz-stolik.component';

describe('ManagerZarzStolikComponent', () => {
  let component: ManagerZarzStolikComponent;
  let fixture: ComponentFixture<ManagerZarzStolikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerZarzStolikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerZarzStolikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
