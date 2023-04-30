import prand from 'pure-rand'
import { Quiz } from "@/firebase/entities/Quiz";

export class Game {
  quizzes: Quiz[]

  constructor(quizzes: Quiz[]) {
    this.quizzes = quizzes;
  }

  static get MAX_NUMBER_OF_QUIZZES(): number {
    return Quiz.ALL.length
  }

  /* Create a deterministic game from a seed and a number of quizzes
  * numberOfQuizzes should be lower than the number of available quizzes!
  * */
  static fromSeed(seed: number, numberOfQuizzes: number): Game {
    const rng = prand.xoroshiro128plus(seed)
    const chosenQuizzes: Quiz[] = []
    const availableQuizzes = Quiz.ALL
    for (let i = 0; i < numberOfQuizzes; i++) {
      const chosenIndex = prand.unsafeUniformIntDistribution(0, availableQuizzes.length - 1, rng)
      const chosenQuiz = availableQuizzes[chosenIndex]
      chosenQuizzes.push(chosenQuiz)
      availableQuizzes.splice(chosenIndex, 1);
    }
    return new Game(chosenQuizzes)
  }
}