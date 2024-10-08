import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { InfoComponent } from './info/info.component';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ProductComponent,InfoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
copyright:string=' 2024 yvonne '
}
