import { Component } from '@angular/core';
import { AdminQuiz } from '../admin-quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent {
  adminQuiz: AdminQuiz[] = [];

  constructor(private quizservice: QuizService) {}


}
