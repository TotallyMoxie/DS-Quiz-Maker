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

  constructor() {
   }


  addQuestion(question: Question) {
    this.allQuestions.push(question);
  }


  deleteQuestion(question : Question) {
    this.allQuestions.splice(this.allQuestions.indexOf(question), 1);
  }

  saveQuiz(newQuiz: Question) {
    this.allQuestions.push(newQuiz);
  }



    /* deleteQuiz() {
    this.allQuiz.splice(0, this.allQuiz.length);

  } */

}
