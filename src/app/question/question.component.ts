import { Component } from '@angular/core';
import { Question } from '../question.model';
import { QuizService } from '../quiz.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  newQuestion: Question = new Question();


  constructor(private quizService:QuizService) { }

  onSubmit() {
    this.quizService.addQuestion(this.newQuestion);  // this is for Add Question
    this.newQuestion = new Question();
    console.log(this.newQuestion);
  }

  isDisable() {
    return this.quizService.allQuestions.length >= 10;
  }

}
