import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cardDetails:Array<any> = [
    {
    image:'https://furahapublisher.com/wp-content/uploads/2022/10/Acifa-Cover-212x300.jpg',
    bookTitle:'Umwamikazi Asifa',
    cardText:'inkuru yukuntu umwamikazi asifa yabayeho'
  },
  {
    image:'https://furahapublisher.com/wp-content/uploads/2022/10/Ikiraro-Cover-212x300.jpg',
    bookTitle:'Ikiraro cyo mu ishyamba',
    cardText:`inkuru y'ikiraro cyo ishyamba, tobi na tito bari bapfuye!!!`
  },
  {
    image:'https://www.globallanguage.com.au/wp-content/uploads/2024/07/9798874275686.jpg',
    bookTitle:'My First 1000 words',
    cardText:"this book of my First 1000 words is so amazinga !!"
  },
  {
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFEx6qy7If1X7xINSFP06S3Q-O1q6pBjyqKg&s',
    bookTitle:'ibyiyumvo',
    cardText:'oooh amazing book,, mbega ibyiyumvooo wee!!!'
  },
  
];

readMore(){
  console.log('read more clicked');
}

}
