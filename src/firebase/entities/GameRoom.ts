import { doc, DocumentReference, DocumentSnapshot, getDoc } from 'firebase/firestore'

import { Score } from '@/firebase/entities/Score'
import { gameRoomsRef } from '@/firebase'
import { Game } from '@/firebase/entities/Game'
import { Player } from '@/firebase/entities/Player'

export class GameRoom {
  id: string
  scores: Score[]
  game: Game

  constructor(id: string, scores: Score[], startTime: Date | null) {
    this.id = id
    this.scores = scores
    this.game = Game.fromStringSeed(this.id, startTime)
  }

  get owner(): Player | null {
    return this.scores[0].player || null
  }

  isOwner(player: Player): boolean {
    return player.equals(this.owner)
  }

  getScore(player: Player): Score | null {
    return this.scores.find(score =>  score.player.equals(player)) || null
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
    const startTime = snapshot.data()?.startTime || null
    const scoresWithPlayerRef = snapshot.data()?.scores
    if (scoresWithPlayerRef instanceof Array) {
      for (const scoreWithPlayerRef of scoresWithPlayerRef) {
        playersPromises.push(Player.loadServerFromRef(scoreWithPlayerRef.player))
      }
      const players: Player[] = await Promise.all(playersPromises)
      const scores = scoresWithPlayerRef.map(
        (scoreWithPlayerRef, index) => new Score(scoreWithPlayerRef.points, players[index])
      )
      return new GameRoom(snapshot.id, scores, startTime)
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

  get players(): Player[] {
    return this.scores.map((score) => score.player)
  }
}
