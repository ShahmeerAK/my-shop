import { Component,OnDestroy,OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../types/Book';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  books: Book[] = [];
  constructor(private booksService: BookService) { 
    
  }
  
  cart: Book[] = [];
  
  isDisabled: boolean = false;

  isShowing: boolean = true;

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }
  handleClick() {
    this.isDisabled = true;
  }
  
  /*myName: string = '';
   for 2way Bindig
  handleInput(event: any) {
    this.myName = event.target.value;
  }*/

  /*toggleBooks() {
    //If it is showing is true, make it false and Vice versa
    this.isShowing = !this.isShowing;
  }*/

// This bookEmmiter from child component(book)
// addToCart(eventname:type)
  addToCart(book:Book) {
    console.log(book);
  }
}
