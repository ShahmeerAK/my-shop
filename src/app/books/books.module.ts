import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../services/book.service';
import { BooksComponent } from '../components/books/books.component';
import { BookComponent } from '../components/book/book.component';



@NgModule({
  declarations: [BooksComponent, BookComponent],
  providers: [BookService],
  imports: [CommonModule],
  exports: [BooksComponent],
})
export class BooksModule { }
