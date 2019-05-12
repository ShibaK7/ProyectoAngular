import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionDobleMixtoComponent } from './inscripcion-doble-mixto.component';

describe('InscripcionDobleMixtoComponent', () => {
  let component: InscripcionDobleMixtoComponent;
  let fixture: ComponentFixture<InscripcionDobleMixtoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionDobleMixtoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionDobleMixtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
