export class Question {
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correctAnswer?: '1'|'2'|'3'|'4'; //? means undefined

  constructor () {
    this.question = '';
    this.answer1 = '';
    this.answer2 = '';
    this.answer3 = '';
    this.answer4 = '';
  }

  isValid() {
    return this.question.length > 0 &&
      this.answer1.length > 0 &&
      this.answer2.length > 0 &&
      this.answer3.length > 0 &&
      this.answer4.length > 0 &&
      this.correctAnswer !== undefined;
  }
}
