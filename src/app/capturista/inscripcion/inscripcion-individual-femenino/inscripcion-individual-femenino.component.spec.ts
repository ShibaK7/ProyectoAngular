import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionIndividualFemeninoComponent } from './inscripcion-individual-femenino.component';

describe('InscripcionIndividualFemeninoComponent', () => {
  let component: InscripcionIndividualFemeninoComponent;
  let fixture: ComponentFixture<InscripcionIndividualFemeninoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionIndividualFemeninoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionIndividualFemeninoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
