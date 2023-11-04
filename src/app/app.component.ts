import { Component } from '@angular/core';
import { QuizService } from './quiz.service';
import { Question } from './question.model';
import { AdminQuiz } from './admin-quiz.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'improved-quiz-maker';

  constructor(private quizService: QuizService) { }

  quizSubmit() {
    return this.quizService.allQuestions.length >= 1;  // we want it to be 10

  }

  onSaveQuiz() {
    this.quizService.saveQuiz();
  }
}
