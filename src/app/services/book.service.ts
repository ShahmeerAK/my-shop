import { Injectable } from '@angular/core';

@Injectable()
export class BookService {

  constructor() { }

  getBooks() {
    return [
      {
        name: 'In Search of Lost Time',
        author: 'Marcel Proust',
        imgUrl: 'https://d3i5mgdwi2ze58.cloudfront.net/7hqv6ddaqv363p4hadx6lymotow1',
        amount: 500,
      },
      {
        name: ' Ulysses',
        author: 'James Joyce',
        imgUrl: 'https://d3i5mgdwi2ze58.cloudfront.net/f7nkbyqfsnrrlct3hs01jkrz2vdi',
        amount: 700,
      },
      {
        name: 'In Search of Lost Time',
        author: 'Marcel Proust',
        imgUrl: 'https://d3i5mgdwi2ze58.cloudfront.net/7hqv6ddaqv363p4hadx6lymotow1',
        amount: 500,
      },
      {
        name: ' Ulysses',
        author: 'James Joyce',
        imgUrl: 'https://d3i5mgdwi2ze58.cloudfront.net/f7nkbyqfsnrrlct3hs01jkrz2vdi',
        amount: 700,
      }
    ]
  }
}
