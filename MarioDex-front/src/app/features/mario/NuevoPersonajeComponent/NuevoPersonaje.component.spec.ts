import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NuevoPersonajeComponent } from './NuevoPersonaje.component';
import { MarioService } from '../../../core/mario.service';

describe('NuevoPersonajeComponent', () => {
  let component: NuevoPersonajeComponent;
  let fixture: ComponentFixture<NuevoPersonajeComponent>;
  let service: MarioService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoPersonajeComponent],
      imports: [FormsModule],
      providers: [MarioService]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoPersonajeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(MarioService);
  });

  it('debe crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debe añadir un personaje válido', () => {
    const spy = spyOn(service, 'addPersonaje');

    component.nombre = 'Luigi';
    component.tipo = 'Héroe';
    component.poder = 40;
    component.mundo = 'Champiñón';

    component.enviar();

    expect(spy).toHaveBeenCalled();
  });

  it('no debe añadir datos vacíos', () => {
    const spy = spyOn(service, 'addPersonaje');

    component.enviar();

    expect(spy).not.toHaveBeenCalled();
  });
});
