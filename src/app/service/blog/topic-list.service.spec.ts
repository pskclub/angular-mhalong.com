/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TopicListService } from './topic-list.service';

describe('Service: TopicList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopicListService]
    });
  });

  it('should ...', inject([TopicListService], (service: TopicListService) => {
    expect(service).toBeTruthy();
  }));
});
