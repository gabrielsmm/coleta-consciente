import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitaColetaComponent } from './solicita-coleta.component';

describe('SolicitaColetaComponent', () => {
  let component: SolicitaColetaComponent;
  let fixture: ComponentFixture<SolicitaColetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitaColetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitaColetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
