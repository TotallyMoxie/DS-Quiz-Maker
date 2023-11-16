import { Component } from '@angular/core';
import { Question } from '../question.model';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {

  constructor(public quizService:QuizService) { }

  onSubmit() {
    this.quizService.addQuestion(this.quizService.newQuestion);
    this.quizService.newQuestion = new Question();
    console.log(this.quizService.newQuestion);
  }

  isDisable() {
    return this.quizService.allQuestions.length >= 10;
  }
  wasAdded() {
    this.quizService.wasAdded = true;
  }

}
