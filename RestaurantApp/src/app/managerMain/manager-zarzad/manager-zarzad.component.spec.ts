import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerZarzadComponent } from './manager-zarzad.component';

describe('ManagerZarzadComponent', () => {
  let component: ManagerZarzadComponent;
  let fixture: ComponentFixture<ManagerZarzadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerZarzadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerZarzadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
