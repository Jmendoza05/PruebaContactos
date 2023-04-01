import { TestBed } from '@angular/core/testing';

import { ListarContactosService } from './listar-contactos.service';

describe('ListarContactosService', () => {
  let service: ListarContactosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarContactosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
