import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorneoIndividualComponent } from './torneo-individual.component';

describe('TorneoIndividualComponent', () => {
  let component: TorneoIndividualComponent;
  let fixture: ComponentFixture<TorneoIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorneoIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorneoIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
