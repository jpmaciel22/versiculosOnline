import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css'],
  imports: [CommonModule]
})
export class ChaptersComponent implements OnInit {
  chapters: any[] = [];
  bookName: string = '';
  bookId: string = '';

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookId = params['bookId'];
      this.loadChapters(this.bookId);
    });
  }

  loadChapters(bookId: string) {
    this.booksService.getChapters(bookId).subscribe({
      next: (res) => {
        this.chapters = res;
        this.bookName = res[0]?.book || ''; // Assume que todos os capítulos são do mesmo livro
      },
      error: (err) => console.error(err)
    });
  }

  selectChapter(chapter: number) {
    this.router.navigate(['/verses', this.bookId, chapter]);
  }

  goBack() {
    this.router.navigate(['/books']);
  }
}