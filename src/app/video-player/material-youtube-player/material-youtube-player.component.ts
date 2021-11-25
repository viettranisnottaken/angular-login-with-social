import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

import { fromEvent, Observable, of } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Lesson } from './lesson-list/lesson-list.component';
import { Question } from './quiz/quiz.component';

interface Quiz {
  title: string;
  questions: Question[];
}

@Component({
  selector: 'app-material-youtube-player',
  templateUrl: './material-youtube-player.component.html',
  styleUrls: ['./material-youtube-player.component.scss'],
})
export class MaterialYoutubePlayerComponent implements OnInit, AfterViewInit {
  containerResizeEvent: Observable<any> | undefined;
  playerHeight: number | undefined;
  playerWidth: number | undefined;
  isListOpened = true;
  // minPlayerWidth = 700;
  minPlayerWidth = 0;
  maxPlayerWidth = 1150;
  lessons!: Lesson[];
  quiz!: Quiz;
  lessonType!: string;
  videoId!: string;

  @ViewChild('container')
  container!: ElementRef;

  @ViewChild('drawer')
  drawer!: MatDrawer;

  constructor() {}

  ngOnInit(): void {
    this.initPlayer();
    this.getLessons()
      .pipe(
        map((lessons) => {
          lessons.map((lesson: Lesson) =>
            lesson.url ? (lesson.url = this.youtubeParser(lesson.url)) : ''
          );

          return lessons;
        })
      )
      .subscribe((lessons) => {
        this.lessons = lessons;
        this.lessonType = this.lessons[0].type;

        if (this.lessons[0].url) {
          this.videoId = this.lessons[0].url;
        }
      });

    this.getQuiz().subscribe((quiz) => (this.quiz = quiz));
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updatePLayerDimentions();
    });

    this.containerResizeEvent = fromEvent(window, 'resize');

    this.containerResizeEvent?.pipe(debounceTime(100)).subscribe((value) => {
      this.updatePLayerDimentions();
    });
  }

  toggleList() {
    this.isListOpened = !this.isListOpened;
    // this.updatePLayerDimentions();
    setTimeout(() => {
      this.updatePLayerDimentions();
    });
  }

  toggleListMaterial() {
    this.drawer.toggle();
    this.updatePLayerDimentions();
  }

  onLessonSelected(lesson: Lesson) {
    this.lessonType = lesson.type;
  }

  private initPlayer() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  private updatePLayerDimentions() {
    this.playerWidth = this.containerDimentions.width;
    this.playerHeight = this.containerDimentions.height;
    console.log('im in', this.playerWidth);
  }

  private get containerDimentions() {
    let width: number;
    let height: number;

    if (this.container.nativeElement.offsetWidth > this.maxPlayerWidth) {
      width = this.maxPlayerWidth;
    } else if (this.container.nativeElement.offsetWidth < this.minPlayerWidth) {
      width = this.minPlayerWidth;
    } else {
      width = this.container.nativeElement.offsetWidth;
    }

    height = (width / 16) * 9;
    return {
      width,
      height,
    };
  }

  private getLessons(): Observable<Lesson[]> {
    const lessons: Lesson[] = [
      {
        label: 'lesson 1',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AFKb1zSsOB8',
      },
      {
        label: 'lesson 2',
        type: 'quiz',
      },
      {
        label: 'lesson 4',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=4GwLdrA6D1E',
      },
      {
        label: 'lesson 5',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AFKb1zSsOB8',
      },
      {
        label: 'lesson 6',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AFKb1zSsOB8',
      },
      {
        label: 'lesson 7',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AFKb1zSsOB8',
      },
      {
        label: 'lesson 8',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AFKb1zSsOB8',
      },
      {
        label: 'lesson 9',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AFKb1zSsOB8',
      },
      {
        label: 'lesson 10',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AFKb1zSsOB8',
      },
      {
        label: 'lesson 11',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AFKb1zSsOB8',
      },
      {
        label: 'lesson 11',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AFKb1zSsOB8',
      },
      {
        label: 'lesson 11',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AFKb1zSsOB8',
      },
      {
        label: 'lesson 11',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AFKb1zSsOB8',
      },
      {
        label: 'lesson 11',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AFKb1zSsOB8',
      },
      {
        label: 'lesson 11',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AFKb1zSsOB8',
      },
      {
        label: 'lesson 11',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AFKb1zSsOB8',
      },
      {
        label: 'lesson 11',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AFKb1zSsOB8',
      },
      {
        label: 'lesson 11',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AFKb1zSsOB8',
      },
      {
        label: 'lesson 11',
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AFKb1zSsOB8',
      },
    ];

    return of(lessons);
  }

  private getQuiz(): Observable<Quiz> {
    const title = 'Mid term test';

    const questions: Question[] = [
      {
        content: 'Question 1',
        answers: [
          { label: 'answer1' },
          { label: 'answer2' },
          { label: 'answer3' },
          { label: 'answer4' },
        ],
      },
      {
        content: 'Question 2',
        answers: [
          { label: 'answer1' },
          { label: 'answer2' },
          { label: 'answer3' },
          { label: 'answer4' },
        ],
      },
      {
        content: 'Question 3',
        answers: [
          { label: 'answer1' },
          { label: 'answer2' },
          { label: 'answer3' },
          { label: 'answer4' },
        ],
      },
      {
        content: 'Question 4',
        answers: [
          { label: 'answer1' },
          { label: 'answer2' },
          { label: 'answer3' },
          { label: 'answer4' },
        ],
      },
      {
        content: 'Question 5',
        answers: [
          { label: 'answer1' },
          { label: 'answer2' },
          { label: 'answer3' },
          { label: 'answer4' },
        ],
      },
    ];

    return of({ title, questions });
  }

  private youtubeParser(url: string) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : undefined;
  }
}
