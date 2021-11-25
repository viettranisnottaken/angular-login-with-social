import { Component, Input, OnInit } from '@angular/core';

export interface Answer {
  label: string;
}

export interface Question {
  content: string;
  answers: Answer[];
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  @Input() questions!: Question[];
  @Input() title!: string;

  constructor() {}

  ngOnInit(): void {}
}
