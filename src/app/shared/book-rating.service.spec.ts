import { Book } from './book';
import { BookRatingService } from './book-rating.service';

describe('BookRatingService', () => {

  let service: BookRatingService;
  let book: Book;

  beforeEach(() => {
    service = new BookRatingService();
    book = {
      isbn: '000',
      title: 'Test Book',
      description: 'ABC',
      rating: 3
    };
  });

  it('should always return a new book', () => {
    const ratedBook = service.rateUp(book);
    expect(ratedBook).not.toBe(book);
  });

  it('it should rate up the book by 1', () => {
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(4);
  });

  it('it should rate down the book by 1', () => {
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('it should not be possible to rated above 5', () => {
    book.rating = 5;
    const ratedBook = service.rateUp(book);
    expect(ratedBook.rating).toBe(5);
  });

  it('it should not be possible to rated below 1', () => {
    book.rating = 1;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });
});
