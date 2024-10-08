import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
message={
  firstName: '',
  lastName: '',
  email:'',
  country: '',
  phoneNumber: '',
  text:'',
}
cancelMessage(){
  this.message.firstName='';
  this.message.lastName='';
  this.message.email='';
  this.message.country='';
  this.message.phoneNumber='';
  this.message.text='';
}
sendMessage(){
let composeMessage={
  sender: this.message.firstName + " " + this.message.lastName,
  email: this.message.email,
  country: this.message.country,
  phoneNumber: this.message.phoneNumber,
  message: this.message.text
}
console.log(composeMessage);

this.message.firstName='';
  this.message.lastName='';
  this.message.email='';
  this.message.country='';
  this.message.phoneNumber='';
  this.message.text='';
}


  


}
