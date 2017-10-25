import { TestBed, inject } from '@angular/core/testing';

import { CommentsService } from './comments.service';

describe('CommentsService', (private http: Http) => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsService]
    });
  });

  it('should be created', inject([CommentsService], (service: CommentsService) => {
    expect(service).toBeTruthy();
  }));
});
