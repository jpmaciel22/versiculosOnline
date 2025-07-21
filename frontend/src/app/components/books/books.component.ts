import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books',
  templateUrl: '/books.component.html',
  styleUrls: ['./books.component.css'],
  imports: [CommonModule]
})
export class BooksComponent {
  books: any[] = [];

  constructor(private booksService: BooksService, private router: Router) {
    this.loadBooks();
  }

  loadBooks() {
    this.booksService.getAllBooks().subscribe({
      next: (res) => {this.books = res},
      error: (err) => console.error(err)
    });
  }

  selectBook(bookId: string) {
    this.router.navigate(['/chapters', bookId]); // Navega para capítulos
  }
}