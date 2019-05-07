import { TestBed, inject } from '@angular/core/testing';

import { TorneosRecordService } from './torneos-record.service';

describe('TorneosRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TorneosRecordService]
    });
  });

  it('should be created', inject([TorneosRecordService], (service: TorneosRecordService) => {
    expect(service).toBeTruthy();
  }));
});
