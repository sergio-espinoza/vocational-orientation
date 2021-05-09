import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterologicalResultComponent } from './characterological.component';

describe('CharacterologicalResultComponent', () => {
  let component: CharacterologicalResultComponent;
  let fixture: ComponentFixture<CharacterologicalResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterologicalResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterologicalResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
