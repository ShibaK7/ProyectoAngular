import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcontactoComponent } from './lcontacto.component';

describe('LcontactoComponent', () => {
  let component: LcontactoComponent;
  let fixture: ComponentFixture<LcontactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcontactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
