import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaModel } from './transferencia.model';

describe('TransferenciaModel', () => {
  let component: TransferenciaModel;
  let fixture: ComponentFixture<TransferenciaModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferenciaModel ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferenciaModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
