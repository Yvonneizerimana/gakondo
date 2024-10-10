import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-createcard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './createcard.component.html',
  styleUrl: './createcard.component.css'
})
export class CreatecardComponent {

     cards={
      image:'',
      title:'',
      text:'',
     }
constructor(private cardService: CardService){}
     createCard(){

this.cardService.onCreateCard(this.cards.image, this.cards.title, this.cards.text)
       this.cards={
        image:'',
        title:'',   
        text:'',
       }
     }
}
