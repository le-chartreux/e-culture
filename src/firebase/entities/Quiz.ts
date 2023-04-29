import type { QuizAnswer } from "@/firebase/entities/QuizAnswer";

export class Quiz {
  question: string
  answers: QuizAnswer[]
  id: string

  constructor(question: string, answers: QuizAnswer[], id: string) {
    this.question = question;
    this.answers = answers;
    this.id = id;
  }
}