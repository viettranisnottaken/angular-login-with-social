import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Lesson {
  label: string;
  type: string;
  url?: string;
}

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss'],
})
export class LessonListComponent implements OnInit {
  @Input() lessons!: Lesson[];
  @Output() lessonSelected = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onSelectLesson(lesson: Lesson) {
    const _lesson = { type: lesson.type, url: '' };

    if (lesson.url) {
      _lesson.url = lesson.url;
    }

    this.lessonSelected.emit(_lesson);
  }
}
