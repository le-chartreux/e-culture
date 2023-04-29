import { doc } from 'firebase/firestore'

import type { Player } from '@/firebase/entities/Player'
import { gamesRef } from '@/firebase'

export class Game {
  id: string
  players: Player[]

  constructor(id: string, players: Player[]) {
    this.id = id
    this.players = players
  }

  get ref() {
    return Game.getRef(this.id)
  }

  static getRef(id: string) {
    return doc(gamesRef, id)
  }

}
