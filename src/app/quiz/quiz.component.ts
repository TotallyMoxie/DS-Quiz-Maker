import { Component, Input } from '@angular/core';
import { AdminQuiz } from '../admin-quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  @Input() newQuiz: AdminQuiz = new AdminQuiz();



}
