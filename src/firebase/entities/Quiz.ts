import { QuizAnswer } from '@/firebase/entities/QuizAnswer'
import quizzesJson from '@/assets/quizzes.json'

export class Quiz {
  question: string
  answers: QuizAnswer[]
  id: string
  private static _ALL: Quiz[] = []

  constructor(question: string, answers: QuizAnswer[], id: string) {
    this.question = question
    this.answers = answers
    this.id = id
  }

  static get ALL(): Quiz[] {
    if (Quiz._ALL.length === 0) {
      Quiz.loadAll()
      if (Quiz._ALL.length === 0) {
        throw Error('Wrong loading of quizzes: no matter what, at least one quiz should exist.')
      }
    }
    return Quiz._ALL
  }

  private static loadAll(): void {
    quizzesJson.map((quizJson, index: number) => {
      Quiz._ALL.push(Quiz.fromJsonAndId(quizJson, index.toString()))
    })
  }

  private static fromJsonAndId(json: any, id: string): Quiz {
    const questionJson = json.question
    const answersJson = json.answers
    if (typeof questionJson === 'string' && typeof answersJson !== 'undefined') {
      const answers: QuizAnswer[] = []
      answersJson.map((answerJson: any) => {
        answers.push(QuizAnswer.fromJson(answerJson))
      })
      return new Quiz(questionJson, answers, id)
    } else {
      throw Error(
        `Impossible to create Quiz from a JSON: field 'question' or 'answers' is incorrect in ${json}`
      )
    }
  }
}
