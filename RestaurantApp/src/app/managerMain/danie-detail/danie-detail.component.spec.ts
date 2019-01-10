import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanieDetailComponent } from './danie-detail.component';

describe('DanieDetailComponent', () => {
  let component: DanieDetailComponent;
  let fixture: ComponentFixture<DanieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
