import { doc } from 'firebase/firestore'

import type { Player } from '@/firebase/entities/Player'
import { gameRoomsRef } from '@/firebase'

export class GameRoom {
  id: string
  players: Player[]

  constructor(id: string, players: Player[]) {
    this.id = id
    this.players = players
  }

  get ref() {
    return GameRoom.getRef(this.id)
  }

  static getRef(id: string) {
    return doc(gameRoomsRef, id)
  }
}
