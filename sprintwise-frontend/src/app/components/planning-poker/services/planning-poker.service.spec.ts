import { TestBed } from '@angular/core/testing';

import { PlanningPokerService } from './planning-poker.service';

describe('PlanningPokerService', () => {
  let service: PlanningPokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanningPokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
