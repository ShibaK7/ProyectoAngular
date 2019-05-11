import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfrentamientoComponent } from './enfrentamiento.component';

describe('EnfrentamientoComponent', () => {
  let component: EnfrentamientoComponent;
  let fixture: ComponentFixture<EnfrentamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfrentamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfrentamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
