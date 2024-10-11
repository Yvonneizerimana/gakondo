
import { Component, OnInit} from '@angular/core';
import { bookCards } from '../../Model/bookModel';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { Book } from '../../Model/bookModel';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent  implements OnInit{
 selectedBook:Book | undefined
 bookId:number=0

 constructor(private bookService:BookService, private route: ActivatedRoute){

 }

 ngOnInit(): void {
  this.bookId=Number(this.route.snapshot.paramMap.get('id'));
   this.selectedBook=this.bookService.getBookById(this.bookId)
 }

}
