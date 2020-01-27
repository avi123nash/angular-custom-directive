import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionTest2Component } from './division-test2.component';

describe('DivisionTest2Component', () => {
  let component: DivisionTest2Component;
  let fixture: ComponentFixture<DivisionTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionTest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
