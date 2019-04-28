import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingMasculinoComponent } from './ranking-masculino.component';

describe('RankingMasculinoComponent', () => {
  let component: RankingMasculinoComponent;
  let fixture: ComponentFixture<RankingMasculinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingMasculinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingMasculinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
