import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verses',
  templateUrl: './verses.component.html',
  styleUrls: ['./verses.component.css'],
  imports: [CommonModule]
})
export class VersesComponent implements OnInit {
  verses: any[] = [];
  bookName: string = '';
  chapterNumber: number = 0;
  bookId: string = '';

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookId = params['bookId'];
      this.chapterNumber = +params['chapter'];
      this.loadVerses(this.bookId, this.chapterNumber);
      localStorage.setItem('bookId', this.bookId);
      localStorage.setItem('chapterNumber', String(this.chapterNumber));
    });
  }

  loadVerses(bookId: string, chapter: number) {
    this.booksService.getVerses(bookId, chapter).subscribe({
      next: (res) => {
        this.verses = res.verses;
        this.bookName = res.verses[0]?.book || '';
      },
      error: (err) => console.error(err)
    });
  }

  goBackToChapters() {
    this.router.navigate(['/chapters', this.bookId]);
  }
}


