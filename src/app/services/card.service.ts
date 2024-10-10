import {Injectable} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class CardService{

    showCard= new Subject<any>();
onCreateCard(image: string, title: string, text: string):void{
    const accept={image,title,text}
    this.showCard.next(accept);    
}
}

