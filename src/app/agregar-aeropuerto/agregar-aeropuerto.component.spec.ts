import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAeropuertoComponent } from './agregar-aeropuerto.component';

describe('AgregarAeropuertoComponent', () => {
  let component: AgregarAeropuertoComponent;
  let fixture: ComponentFixture<AgregarAeropuertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarAeropuertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAeropuertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
