import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [NgFor,NgStyle,NgClass],
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  images = [
    { src: 'https://cdn.create.vista.com/api/media/small/184080676/stock-photo-old-used-hardback-books-text-books-seen-books-reading-essential' },
    { src: 'https://static.vecteezy.com/system/resources/thumbnails/044/280/984/small/stack-of-books-on-a-brown-background-concept-for-world-book-day-photo.jpg' },
    { src: 'https://img.freepik.com/free-photo/creative-composition-world-book-day_23-2148883765.jpg' }
  ];

  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000); 
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length; 
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
