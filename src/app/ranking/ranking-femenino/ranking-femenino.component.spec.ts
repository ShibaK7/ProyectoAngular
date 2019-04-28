import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingFemeninoComponent } from './ranking-femenino.component';

describe('RankingFemeninoComponent', () => {
  let component: RankingFemeninoComponent;
  let fixture: ComponentFixture<RankingFemeninoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingFemeninoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingFemeninoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
