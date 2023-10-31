import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubepageComponent } from './youtubepage.component';

describe('YoutubepageComponent', () => {
  let component: YoutubepageComponent;
  let fixture: ComponentFixture<YoutubepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubepageComponent]
    });
    fixture = TestBed.createComponent(YoutubepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
