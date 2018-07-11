import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  books: Book[];

  reorderBooks(b: Book) {
    console.log(b);

    this.books = this.books
      .map(book => b.isbn === book.isbn ? b : book)
      .sort((x, y) => y.rating - x.rating);
  }


  ngOnInit() {
    this.books = [{ title: 'Angular', description: 'ABC', isbn: '123', rating: 4 }
      , { title: 'Survive Anything', description: 'DEF', isbn: '456', rating: 5 },
    { title: 'Exploding Kittens', description: 'XYZ', isbn: '789', rating: 3 }];
  }



}
