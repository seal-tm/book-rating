import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRatingService } from '../shared/book-rating.service';
import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  let hasBeenCalled = false;
  const ratingMock = {
    rateUp() { hasBeenCalled = true; },
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      providers: [{
        provide: BookRatingService,
        useValue: ratingMock
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    component.book = {
      isbn: '000',
      description: 'ABC',
      rating: 4,
      title: 'AAA'
    };

    fixture.detectChanges();
  });

  it('should forward the rate up call to the service', () => {
    component.rateUp();
    expect(hasBeenCalled).toBeTruthy();
  });
});
