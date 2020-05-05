import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromedioFormComponent } from './promedio-form.component';

describe('PromedioFormComponent', () => {
  let component: PromedioFormComponent;
  let fixture: ComponentFixture<PromedioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromedioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromedioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
