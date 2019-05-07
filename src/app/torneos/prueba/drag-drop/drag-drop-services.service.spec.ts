import { TestBed, inject } from '@angular/core/testing';

import { DragDropServicesService } from './drag-drop-services.service';

describe('DragDropServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragDropServicesService]
    });
  });

  it('should be created', inject([DragDropServicesService], (service: DragDropServicesService) => {
    expect(service).toBeTruthy();
  }));
});
