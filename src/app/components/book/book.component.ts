import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: Book = {} as Book;
  @Output() bookEmmiter = new EventEmitter<Book>();

  myInterval: any = null;

  isInCart: boolean = false;
  constructor(private cartService: CartService) { }


  ngOnInit(): void {

    /*this.myInterval = setInterval(() => {
      console.log('Hello');
    }, 1000)*/
  }

  ngOnDestroy(): void {
    // clearInterval(this.myInterval);
  }


  addToCart() {
    this.isInCart = true;
    this.cartService.add(this.book);
    // this.bookEmmiter.emit(this.book);
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
