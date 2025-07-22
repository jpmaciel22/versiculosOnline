import { Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { ChaptersComponent } from './components/chapters/chapters.component';
import { VersesComponent } from './components/verses/verses.component';
import { DailyVerseComponent } from './components/daily-verse/daily-verse.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: BooksComponent },
    { path: 'chapters/:bookId', component: ChaptersComponent },
    { path: 'verses/:bookId/:chapter/:max_chapters', component: VersesComponent },
    { path: 'daily', component: DailyVerseComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'search', component: SearchComponent }
];
