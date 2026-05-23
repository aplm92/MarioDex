import { TestBed } from '@angular/core/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { MarioService, Personaje } from './mario.service';

describe('MarioService (Laravel API)', () => {

  let service: MarioService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:8000/api/personajes';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarioService]
    });

    service = TestBed.inject(MarioService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  // 1. Creación del servicio
  it('debe crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  // 2. Cargar lista inicial (constructor llama cargarPersonajes)
  it('debe cargar la lista inicial de personajes', () => {
    const mockPersonajes: Personaje[] = [
      { id: 1, nombre: 'Mario', tipo: 'Héroe', poder: 50 }
    ];

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPersonajes);

    service.personajes$.subscribe(lista => {
      expect(lista).toEqual(mockPersonajes);
    });
  });

  // 3. Añadir personaje
  it('debe añadir un personaje y recargar la lista', () => {
    const nuevo: Personaje = { nombre: 'Luigi', tipo: 'Héroe', poder: 40 };
    const mockListaActualizada: Personaje[] = [
      { id: 1, nombre: 'Luigi', tipo: 'Héroe', poder: 40 }
    ];

    service.addPersonaje(nuevo);

    // POST
    const reqPost = httpMock.expectOne(apiUrl);
    expect(reqPost.request.method).toBe('POST');
    expect(reqPost.request.body).toEqual(nuevo);
    reqPost.flush({ id: 1, ...nuevo });

    // GET recarga
    const reqGet = httpMock.expectOne(apiUrl);
    expect(reqGet.request.method).toBe('GET');
    reqGet.flush(mockListaActualizada);

    service.personajes$.subscribe(lista => {
      expect(lista).toEqual(mockListaActualizada);
    });
  });

  // 4. Eliminar personaje
  it('debe eliminar un personaje y recargar la lista', () => {
    const mockListaActualizada: Personaje[] = [];

    service.deletePersonaje(1);

    // DELETE
    const reqDelete = httpMock.expectOne(`${apiUrl}/1`);
    expect(reqDelete.request.method).toBe('DELETE');
    reqDelete.flush({ message: 'Eliminado' });

    // GET recarga
    const reqGet = httpMock.expectOne(apiUrl);
    expect(reqGet.request.method).toBe('GET');
    reqGet.flush(mockListaActualizada);

    service.personajes$.subscribe(lista => {
      expect(lista).toEqual(mockListaActualizada);
    });
  });

  // 5. Manejo de errores
  it('debe manejar errores al cargar personajes', () => {
    spyOn(console, 'error');

    service.cargarPersonajes();

    const req = httpMock.expectOne(apiUrl);
    req.flush('Error', { status: 500, statusText: 'Server Error' });

    expect(console.error).toHaveBeenCalled();
  });

});
