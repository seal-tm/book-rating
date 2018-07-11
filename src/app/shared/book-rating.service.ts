import { Injectable } from '@angular/core';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  private minRating = 1;
  private maxRating = 5;

  rateUp(book: Book): Book {
    let r = book.rating;
    if (r >= 5) { r = 5; } else { r++; }

    const ret: Book = { ...book, rating: r };
    return ret;
  }

  rateDown(book: Book): Book {
    let r = book.rating;
    if (r <= 1) { r = 1; } else { r--; }

    const ret: Book = { ...book, rating: r };
    return ret;
  }



  constructor() { }
}
