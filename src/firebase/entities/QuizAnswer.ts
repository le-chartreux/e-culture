export class QuizAnswer {
  answer: string
  correct: boolean

  constructor(answer: string, correct: boolean) {
    this.answer = answer
    this.correct = correct
  }

  static fromJson(json: any): QuizAnswer {
    const answer = json.answer
    const correct = json.correct
    if (typeof answer === 'string' && typeof correct === 'boolean') {
      return new QuizAnswer(answer, correct)
    } else {
      throw Error(
        `Impossible to create QuizAnswer from a JSON: incorrect field 'answer' or 'correct' in ${json}`
      )
    }
  }
}
