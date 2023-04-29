import type { Player } from "@/firebase/entities/Player";

export class Game {
  id: string
  players: Player[]

  constructor(id: string, players: Player[]) {
    this.id = id
    this.players = players
  }
}
