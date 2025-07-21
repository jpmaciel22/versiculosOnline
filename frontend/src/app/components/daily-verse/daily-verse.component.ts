// daily-verse.component.ts
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daily-verse',
  templateUrl: '/daily-verse.component.html',
  styles: ['daily-verse.component.css'],
  imports: [CommonModule]
})
export class DailyVerseComponent implements OnInit {
  verse: any;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.loadDailyVerse();
  }

  loadDailyVerse() {
    this.booksService.getRandom().subscribe({
      next: (res) => {
        // Supondo que a API retorne um único verso aleatório no formato:
        // { book: 'João', chapter: 3, verse: 16, text: '...' }
        this.verse = res;
      },
      error: (err) => console.error(err)
    });
  }
}