import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocationalOrientationResultComponent } from './vocational-orientation.component';

describe('VocationalOrientationResultComponent', () => {
  let component: VocationalOrientationResultComponent;
  let fixture: ComponentFixture<VocationalOrientationResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocationalOrientationResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocationalOrientationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
