import { doc, DocumentReference, DocumentSnapshot, getDoc } from 'firebase/firestore'

import { Player } from '@/firebase/entities/Player'
import { gameRoomsRef } from '@/firebase'
import { Game } from '@/firebase/entities/Game'

export class GameRoom {
  id: string
  players: Player[]
  startTime: Date | null
  game: Game

  constructor(id: string, players: Player[], startTime: Date | null) {
    this.id = id
    this.players = players
    this.startTime = startTime
    this.game = Game.fromStringSeed(this.id, 10)
  }

  get owner(): Player | null {
    return this.players[0] || null
  }

  isOwner(player: Player): boolean {
    return player.equals(this.owner)
  }

  static async loadServerFromId(id: string): Promise<GameRoom> {
    const gameSnapshot: DocumentSnapshot = await getDoc(GameRoom.getRef(id))
    if (gameSnapshot.exists()) {
      return await GameRoom.loadServerFromSnapshot(gameSnapshot)
    } else {
      throw Error(`Impossible to create GameRoom from ${gameSnapshot}: does not exists.`)
    }
  }

  static async loadServerFromSnapshot(snapshot: DocumentSnapshot): Promise<GameRoom> {
    const playersPromises: Promise<Player>[] = []
    const playersRefs = snapshot.data()?.players
    const startTime = snapshot.data()?.startTime || null
    if (playersRefs instanceof Array) {
      for (const playerRef of playersRefs) {
        playersPromises.push(Player.loadServerFromRef(playerRef))
      }
      const players: Player[] = await Promise.all(playersPromises)
      return new GameRoom(snapshot.id, players, startTime)
    } else {
      throw Error(`Impossible to get GameRoom from snapshot ${snapshot}: no data.`)
    }
  }

  get ref(): DocumentReference {
    return GameRoom.getRef(this.id)
  }

  static getRef(id: string): DocumentReference {
    return doc(gameRoomsRef, id)
  }

  get started(): boolean {
    return this.startTime !== null
  }
}
