import prand from 'pure-rand'
import { Quiz } from '@/firebase/entities/Quiz'

export class Game {
  quizzes: Quiz[]

  constructor(quizzes: Quiz[]) {
    this.quizzes = quizzes
  }

  static get MAX_NUMBER_OF_QUIZZES(): number {
    return Quiz.ALL.length
  }

  /* Create a deterministic game from a string seed and a number of quizzes
   * numberOfQuizzes should be lower than the number of available quizzes!
   * */
  static fromStringSeed(seed: string, numberOfQuizzes: number): Game {
    return this.fromNumberSeed(this.stringSeedToNumberSeed(seed), numberOfQuizzes)
  }

  /* Sum the char codes of the string seed  */
  private static stringSeedToNumberSeed(seed: string): number {
    return seed.split('').reduce((partialSum, a) => partialSum + a.charCodeAt(0), 0)
  }

  /* Create a deterministic game from a number seed and a number of quizzes
   * numberOfQuizzes should be lower than the number of available quizzes!
   * */
  static fromNumberSeed(seed: number, numberOfQuizzes: number): Game {
    const rng = prand.xoroshiro128plus(seed)
    const chosenQuizzes: Quiz[] = []
    const availableQuizzes = Quiz.ALL
    for (let i = 0; i < numberOfQuizzes; i++) {
      const chosenIndex = prand.unsafeUniformIntDistribution(0, availableQuizzes.length - 1, rng)
      const chosenQuiz = availableQuizzes[chosenIndex]
      chosenQuizzes.push(chosenQuiz)
      availableQuizzes.splice(chosenIndex, 1)
    }
    return new Game(chosenQuizzes)
  }
}
