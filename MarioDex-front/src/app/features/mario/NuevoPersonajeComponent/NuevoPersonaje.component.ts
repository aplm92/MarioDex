import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../../core/mario.service';

@Component({
  selector: 'app-nuevo-personaje',
  templateUrl: './NuevoPersonaje.component.html',
  standalone: false
})
export class NuevoPersonajeComponent {

  nombre = '';
  tipo = '';
  poder = 0;
  mundo = '';
  @Output() crear = new EventEmitter<Personaje>();
  @Output() cancelar = new EventEmitter<void>();

  enviar(): void {
    this.crear.emit({
      nombre: this.nombre,
      tipo: this.tipo,
      poder: this.poder,
      mundo: this.mundo,
    });
  }
}
