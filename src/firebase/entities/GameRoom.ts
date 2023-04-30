import { doc, DocumentSnapshot, getDoc } from "firebase/firestore";

import { Player } from '@/firebase/entities/Player'
import { gameRoomsRef } from '@/firebase'

export class GameRoom {
  id: string
  players: Player[]

  constructor(id: string, players: Player[]) {
    this.id = id
    this.players = players
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
    if (playersRefs) {
      for (const playerRef of playersRefs) {
        playersPromises.push(Player.loadServerFromRef(playerRef))
      }
      const players: Player[] = await Promise.all(playersPromises)
      return new GameRoom(snapshot.id, players)
    } else {
      throw Error(`Impossible to get GameRoom from snapshot ${snapshot}: no data.`)
    }
  }

  get ref() {
    return GameRoom.getRef(this.id)
  }

  static getRef(id: string) {
    return doc(gameRoomsRef, id)
  }
}
