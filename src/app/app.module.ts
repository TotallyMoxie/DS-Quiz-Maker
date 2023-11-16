
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { NgModule } from '@angular/core';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { NewQuizComponent } from './new-quiz/new-quiz.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionComponent,
    QuestionListComponent,
    QuizListComponent,
    NewQuizComponent,
    HeaderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
