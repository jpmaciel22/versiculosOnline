import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyVerseComponent } from './daily-verse.component';

describe('DailyVerseComponent', () => {
  let component: DailyVerseComponent;
  let fixture: ComponentFixture<DailyVerseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyVerseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyVerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
