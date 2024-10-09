import {Injectable} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class CardService{

showCard:EventEmitter<any>= new EventEmitter<any>()

onCreateCard(value1:any,value2:any,value3:any):void{
    let accept=value1+value2+value3
    this.showCard.emit(accept);
}

}