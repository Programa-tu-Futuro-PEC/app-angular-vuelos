import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAeropuertosComponent } from './lista-aeropuertos.component';

describe('ListaAeropuertosComponent', () => {
  let component: ListaAeropuertosComponent;
  let fixture: ComponentFixture<ListaAeropuertosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAeropuertosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAeropuertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
