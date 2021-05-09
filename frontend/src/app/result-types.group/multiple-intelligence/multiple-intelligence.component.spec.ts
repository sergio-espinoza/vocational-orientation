import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleIntelligenceResultComponent } from './multiple-intelligence.component';

describe('MultipleIntelligenceResultComponent', () => {
  let component: MultipleIntelligenceResultComponent;
  let fixture: ComponentFixture<MultipleIntelligenceResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleIntelligenceResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleIntelligenceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
