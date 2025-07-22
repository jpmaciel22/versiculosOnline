import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

constructor(private bs:BooksService){}

input:string = '';
verseData: any = null;

goToChapter(input: string){
  this.bs.getSearchVerse(input).subscribe({
    next: (res) => {
      this.verseData = res
    },
    error: (err) => {
      console.log(err)
    }
  })
}

}
