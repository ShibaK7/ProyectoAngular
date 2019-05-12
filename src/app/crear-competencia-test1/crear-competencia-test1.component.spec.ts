import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCompetenciaTest1Component } from './crear-competencia-test1.component';

describe('CrearCompetenciaTest1Component', () => {
  let component: CrearCompetenciaTest1Component;
  let fixture: ComponentFixture<CrearCompetenciaTest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCompetenciaTest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCompetenciaTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
