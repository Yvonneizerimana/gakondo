import { Injectable } from "@angular/core";
import { bookCards } from '../Model/bookModel';  
import { Book } from "../Model/bookModel";

@Injectable({
  providedIn: "root",
})

export class BookService {
  getBooks() {
    return bookCards;
  }
  getBookById(bookId: number): Book | undefined {
    return bookCards.find((book: Book) => book.bookId === bookId);
}
}
