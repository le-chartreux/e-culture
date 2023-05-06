import prand from 'pure-rand'
import { Quiz } from '@/firebase/entities/Quiz'

export class Game {
  quizzes: Quiz[]
  startTime: Date | null
  static readonly SECONDS_BY_QUESTION = 10

  constructor(quizzes: Quiz[], startTime: Date | null) {
    this.quizzes = quizzes
    this.startTime = startTime
  }

  static get MAX_NUMBER_OF_QUIZZES(): number {
    return Quiz.ALL.length
  }

  static get NUMBER_OF_QUIZZES(): number {
    return 10
  }

  /* Create a deterministic game from a string seed and a number of quizzes
   * numberOfQuizzes should be lower than the number of available quizzes!
   * */
  static fromStringSeed(seed: string, startTime: Date | null): Game {
    return this.fromNumberSeed(this.stringSeedToNumberSeed(seed), startTime)
  }

  /* Sum the char codes of the string seed  */
  private static stringSeedToNumberSeed(seed: string): number {
    return seed.split('').reduce((partialSum, a) => partialSum + a.charCodeAt(0), 0)
  }

  /* Create a deterministic game from a number seed and a number of quizzes
   * numberOfQuizzes should be lower than the number of available quizzes!
   * */
  static fromNumberSeed(seed: number, startTime: Date | null): Game {
    return new Game(this.getChosenQuizzesFromNumberSeed(seed), startTime)
  }

  private static getChosenQuizzesFromNumberSeed(seed: number): Quiz[] {
    const rng = prand.xoroshiro128plus(seed)
    const chosenQuizzes: Quiz[] = []
    const availableQuizzes = [...Quiz.ALL]
    for (let i = 0; i < Game.NUMBER_OF_QUIZZES; i++) {
      const chosenIndex = prand.unsafeUniformIntDistribution(0, availableQuizzes.length - 1, rng)
      const chosenQuiz = availableQuizzes[chosenIndex]
      chosenQuizzes.push(chosenQuiz)
      availableQuizzes.splice(chosenIndex, 1)
    }
    return chosenQuizzes
  }

  get currentQuiz(): Quiz {
    if (this.started && !this.ended) {
      return this.quizzes[this.indexCurrentQuiz]
    } else {
      throw Error(
        "Impossible to get the current quiz: the game haven't started or has already ended."
      )
    }
  }

  get secondsSinceStart(): number {
    const msSinceStart = Date.now().valueOf() - (this.startTime as Date).valueOf()
    return msSinceStart / 1000
  }

  get indexCurrentQuiz(): number {
    if (this.started) {
      return Math.floor(this.secondsSinceStart / Game.SECONDS_BY_QUESTION)
    } else {
      throw Error("Impossible to calculate the index of the current quiz: the game haven't started")
    }
  }

  get started(): boolean {
    return this.startTime !== null
  }

  get ended(): boolean {
    return this.started && this.indexCurrentQuiz + 1 > Game.NUMBER_OF_QUIZZES
  }

  get secondsSinceQuizStarted(): number {
    return this.secondsSinceStart - this.indexCurrentQuiz * Game.SECONDS_BY_QUESTION
  }

  get timeUntilNextQuiz(): number {
    return Math.ceil(Game.SECONDS_BY_QUESTION - this.secondsSinceQuizStarted)
  }
}
