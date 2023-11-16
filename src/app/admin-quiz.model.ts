import { Question } from "./question.model";


export class AdminQuiz {

  quizTitle: string;
  quiz: Question[] = [];

    constructor() {
      this.quizTitle = '',
      this.quiz = []
     }

}

