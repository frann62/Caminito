import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminitoContactComponent } from './caminito-contact.component';

describe('CaminitoContactComponent', () => {
  let component: CaminitoContactComponent;
  let fixture: ComponentFixture<CaminitoContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaminitoContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminitoContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
