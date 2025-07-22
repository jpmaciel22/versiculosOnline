import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  link:any = ''
  bookId: any;
  num:any
  max_chapters: any

  ngOnInit(){
    this.bookId = localStorage.getItem('bookId')
    this.num = localStorage.getItem('chapterNumber');
    this.max_chapters = localStorage.getItem('max_chapters');
    this.link = `http://localhost:4200/verses/${this.bookId}/${this.num}/${this.max_chapters}`
  }
}
