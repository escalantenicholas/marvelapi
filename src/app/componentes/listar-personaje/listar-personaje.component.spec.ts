import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPersonajeComponent } from './listar-personaje.component';

describe('ListarPersonajeComponent', () => {
  let component: ListarPersonajeComponent;
  let fixture: ComponentFixture<ListarPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
