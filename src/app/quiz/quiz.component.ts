import { Component, Input } from '@angular/core';
import { AdminQuiz } from '../admin-quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {



  submitQuiz() {

  }

  constructor(public quizservice: QuizService) { this.quizservice.quizToCreate = this.quizservice.quizToCreate; }
}
