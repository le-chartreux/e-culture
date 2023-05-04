import type { Player } from '@/firebase/entities/Player'

export class Score {
  points: number
  player: Player

  constructor(points: number, player: Player) {
    this.points = points
    this.player = player
  }

  get doc() {
    return { points: this.points, player: this.player.ref }
  }

  addGoodAnswer() {
    this.points++
  }

  valueOf() {
    return this.points
  }
}
