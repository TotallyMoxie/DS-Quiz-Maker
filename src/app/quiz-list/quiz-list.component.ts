import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent {

  constructor(public quizservice: QuizService) { }


  quizSubmit() {
    return this.quizservice.allQuestions.length >= 1;  // we want it to be 10

  }

  onSaveQuiz() {
    this.quizservice.saveQuiz();
    this.quizservice.clearOnSave();
  }


  onDeleteQuiz() {
    this.quizservice.deleteQuiz();
  }

}
