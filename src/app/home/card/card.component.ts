import { Component, Inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { CardService } from '../../services/card.service';
import { OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  book:any=[]

 constructor(private bookService:BookService, private router:Router){}
 
 ngOnInit(): void {
   this.book=this.bookService.getBooks()
 }
  
 bookDetails(bookId:number){
    this.router.navigate(['book',bookId])
 }
}
