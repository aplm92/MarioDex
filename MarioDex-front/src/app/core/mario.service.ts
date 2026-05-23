import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface Personaje {
  id?: number;
  nombre: string;
  tipo: string;
  poder: number;
  mundo: string;
}

@Injectable({
  providedIn: 'root'
})
export class MarioService {

  private apiUrl = environment.apiUrl;


  private personajesSubject = new BehaviorSubject<Personaje[]>([]);
  personajes$ = this.personajesSubject.asObservable();

  constructor(private http: HttpClient) {
    this.cargarPersonajes();
  }

  cargarPersonajes(): void {
    this.http.get<Personaje[]>(this.apiUrl)
      .subscribe({
        next: personajes => this.personajesSubject.next(personajes),
        error: err => console.error('Error cargando personajes', err)
      });
  }

  addPersonaje(personaje: Personaje): void {
    this.http.post<Personaje>(this.apiUrl, personaje)
      .subscribe({
        next: () => this.cargarPersonajes(),
        error: err => console.error('Error añadiendo personaje', err)
      });
  }

  deletePersonaje(id: number): void {
    this.http.delete(`${this.apiUrl}/${id}`)
      .subscribe({
        next: () => this.cargarPersonajes(),
        error: err => console.error('Error eliminando personaje', err)
      });
  }
}
