import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialYoutubePlayerComponent } from './material-youtube-player.component';

describe('MaterialYoutubePlayerComponent', () => {
  let component: MaterialYoutubePlayerComponent;
  let fixture: ComponentFixture<MaterialYoutubePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialYoutubePlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialYoutubePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
