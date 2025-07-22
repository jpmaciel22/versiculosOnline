import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private http: HttpClient) { }
  api = 'http://localhost:3001'


  //?translation=almeida

  getAllBooks(): Observable<any> {
    return this.http.get(`${this.api}/books/`)
  }

  getRandom(): Observable<any> {
    return this.http.get(`${this.api}/books/daily`)
  }

getChapters(bookId: string): Observable<any> {
  return this.http.get(`${this.api}/books/${bookId}/chapters`);
}

getVerses(bookId: string, chapter: number): Observable<any> {
  return this.http.get(`${this.api}/books/${bookId}/${chapter}`);
}

getSearchVerse(input:string): Observable<any>{
  console.log(input)
  return this.http.get(`${this.api}/books/search/${input}`)
}

}
