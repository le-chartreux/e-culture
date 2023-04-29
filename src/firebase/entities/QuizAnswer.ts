export class QuizAnswer {
  answer: string
  correct: boolean

  constructor(answer: string, correct: boolean) {
    this.answer = answer
    this.correct = correct
  }
}
