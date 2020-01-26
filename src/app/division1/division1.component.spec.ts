import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Division1Component } from './division1.component';

describe('Division1Component', () => {
  let component: Division1Component;
  let fixture: ComponentFixture<Division1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Division1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Division1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
