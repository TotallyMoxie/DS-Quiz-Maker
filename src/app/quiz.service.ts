import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { AdminQuiz } from './admin-quiz.model';


@Injectable({
  providedIn: 'root'
})

export class QuizService {
  allQuestions : Question[] = [];
  isDisabled : boolean = true;
  adminQuiz: AdminQuiz[] = [];
  newQuestion: Question = new Question();
  quizToCreate: AdminQuiz = new AdminQuiz();

  wasAdded : boolean = false;


  constructor() {
   }


  addQuestion(question: Question) {
    this.allQuestions.push(question);
  }


  deleteQuestion(question : Question) {
    this.allQuestions.splice(this.allQuestions.indexOf(question), 1);
  }

  saveQuiz() {
    this.adminQuiz.push(this.quizToCreate);
    this.quizToCreate = new AdminQuiz();
  }

  clearOnSave() {
    this.allQuestions.splice(0, this.allQuestions.length);
  }

  deleteQuiz() {
    this.allQuestions.splice(0, this.allQuestions.length);
  }


}
