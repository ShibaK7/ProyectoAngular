import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlaveComponent } from './llave.component';

describe('LlaveComponent', () => {
  let component: LlaveComponent;
  let fixture: ComponentFixture<LlaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
