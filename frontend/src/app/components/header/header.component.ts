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
    this.router.navigate(['/books']);
  }
  getDaily() {
    this.router.navigate(['/daily']); // Navega para a rota do verso diário
  }

}
