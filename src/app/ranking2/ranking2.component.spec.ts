import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ranking2Component } from './ranking2.component';

describe('Ranking2Component', () => {
  let component: Ranking2Component;
  let fixture: ComponentFixture<Ranking2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ranking2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ranking2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
