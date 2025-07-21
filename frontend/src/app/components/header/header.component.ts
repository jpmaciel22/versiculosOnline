import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  livros: any[] = [];
  verso: any[] = [];
  constructor(private books: BooksService, private router: Router) { }
  getAllBooks() {
    this.books.getAllBooks().subscribe({
      next: (res) => {
        this.livros = res;
        console.log(this.livros)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  getDaily() {
    this.books.getRandom().subscribe({
      next: (res) => {
        this.verso = res;
        console.log(this.verso)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
