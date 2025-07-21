import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersesComponent } from './verses.component';

describe('VersesComponent', () => {
  let component: VersesComponent;
  let fixture: ComponentFixture<VersesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
