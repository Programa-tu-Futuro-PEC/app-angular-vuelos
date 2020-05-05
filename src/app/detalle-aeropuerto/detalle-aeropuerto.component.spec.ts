import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAeropuertoComponent } from './detalle-aeropuerto.component';

describe('DetalleAeropuertoComponent', () => {
  let component: DetalleAeropuertoComponent;
  let fixture: ComponentFixture<DetalleAeropuertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAeropuertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAeropuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
