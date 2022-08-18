import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OQueColetamosComponent } from './o-que-coletamos.component';

describe('OQueColetamosComponent', () => {
  let component: OQueColetamosComponent;
  let fixture: ComponentFixture<OQueColetamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OQueColetamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OQueColetamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
