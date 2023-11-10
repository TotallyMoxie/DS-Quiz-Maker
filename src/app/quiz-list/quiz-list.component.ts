import { Component } from '@angular/core';
import { AdminQuiz } from '../admin-quiz.model';
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

    this.quizservice.adminQuiz.push(this.quizservice.quizToCreate);
  }



}
