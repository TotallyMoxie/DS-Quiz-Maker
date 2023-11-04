import { Component } from '@angular/core';
import { Question } from '../question.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {
  allQuestions : Question[] = []

  constructor(private quizservice: QuizService) { this.allQuestions = this.quizservice.allQuestions; }

  deleteQuestion(question : Question) {
    this.quizservice.deleteQuestion(question);
  }


}
