import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionIndividualMasculinoComponent } from './inscripcion-individual-masculino.component';

describe('InscripcionIndividualMasculinoComponent', () => {
  let component: InscripcionIndividualMasculinoComponent;
  let fixture: ComponentFixture<InscripcionIndividualMasculinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionIndividualMasculinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionIndividualMasculinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
