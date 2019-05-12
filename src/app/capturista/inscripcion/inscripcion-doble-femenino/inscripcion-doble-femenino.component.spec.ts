import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionDobleFemeninoComponent } from './inscripcion-doble-femenino.component';

describe('InscripcionDobleFemeninoComponent', () => {
  let component: InscripcionDobleFemeninoComponent;
  let fixture: ComponentFixture<InscripcionDobleFemeninoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionDobleFemeninoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionDobleFemeninoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
