import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletosComponent } from './completos.component';

describe('CompletosComponent', () => {
  let component: CompletosComponent;
  let fixture: ComponentFixture<CompletosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
