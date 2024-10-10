import { Component,OnInit } from '@angular/core';
import {ajax} from 'rxjs/ajax'

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent implements OnInit {

  ngOnInit(): void {
    const dataa = ajax('https://huza-backend-app-api-1.onrender.com/api/profile/allProfile');
    dataa.subscribe((response: any) => {
      console.log(response);
    });
  }

}
