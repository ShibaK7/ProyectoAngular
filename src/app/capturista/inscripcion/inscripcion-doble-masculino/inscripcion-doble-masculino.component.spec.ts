import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionDobleMasculinoComponent } from './inscripcion-doble-masculino.component';

describe('InscripcionDobleMasculinoComponent', () => {
  let component: InscripcionDobleMasculinoComponent;
  let fixture: ComponentFixture<InscripcionDobleMasculinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionDobleMasculinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionDobleMasculinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
