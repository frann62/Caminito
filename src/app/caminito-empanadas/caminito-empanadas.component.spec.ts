import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminitoEmpanadasComponent } from './caminito-empanadas.component';

describe('CaminitoEmpanadasComponent', () => {
  let component: CaminitoEmpanadasComponent;
  let fixture: ComponentFixture<CaminitoEmpanadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaminitoEmpanadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminitoEmpanadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
