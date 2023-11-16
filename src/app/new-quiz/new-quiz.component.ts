import { Component } from '@angular/core';
import { AdminQuiz } from '../admin-quiz.model';

import { QuizService } from '../quiz.service';




@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.css']
})
export class NewQuizComponent {


  constructor (private quizService: QuizService) {}


}
