import { TestBed } from '@angular/core/testing';

import { CrearContactoService } from './crear-contacto.service';

describe('CrearContactoService', () => {
  let service: CrearContactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearContactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
