import { TestBed } from '@angular/core/testing';

import { DadoscontatoService } from './dadoscontato.service';

describe('DadoscontatoService', () => {
  let service: DadoscontatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadoscontatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
