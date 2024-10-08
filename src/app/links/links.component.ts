import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {

}
