import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BooksComponent } from './books/books.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { CreatecardComponent } from './createcard/createcard.component';
import { BookDetailsComponent } from './home/book-details/book-details.component';

export const routes: Routes = [
    
        {
            path:'',
            redirectTo:'home',
            pathMatch:'full'
            
        },
        {
            path:'home',
            component:HomeComponent,
        },
        {
            path:'aboutus',
            component:AboutusComponent,
        },
        {
            path:'books',
            component:BooksComponent,
        },
        {
            path:'contactus',
            component:ContactusComponent,
        },
        {
            path:'admin',
            component:AdminComponent,       
        },
        {
            path:'createcard',
            component:CreatecardComponent,
        },
        {
            path:'book/:id',
            component:BookDetailsComponent,
        },
    
];
