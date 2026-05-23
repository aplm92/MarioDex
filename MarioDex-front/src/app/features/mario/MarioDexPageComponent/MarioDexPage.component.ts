import { Component } from '@angular/core';
import { MarioService, Personaje } from '../../../core/mario.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mario-dex-page',
  templateUrl: './MarioDexPage.component.html',
  standalone: false
})
export class MarioDexPageComponent {

  personajes$!: Observable<Personaje[]>;
  mostrarModal = false;

  constructor(private marioService: MarioService) {
    this.personajes$ = this.marioService.personajes$;
  }

  abrirModal(): void {
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }

  onNuevoPersonaje(personaje: Personaje): void {
    this.marioService.addPersonaje(personaje);
    this.cerrarModal();
  }
}
