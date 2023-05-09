import {
  arrayRemove,
  arrayUnion,
  doc,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
  updateDoc,
  setDoc
} from 'firebase/firestore'

import { Score } from '@/firebase/entities/Score'
import { gameRoomsRef } from '@/firebase'
import { Game } from '@/firebase/entities/Game'
import { Player } from '@/firebase/entities/Player'
import type { QuizAnswer } from '@/firebase/entities/QuizAnswer'

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
    return this.scores[0]?.player || null
  }

  isOwner(player: Player): boolean {
    return player.equals(this.owner)
  }

  getScore(player: Player): Score | null {
    return this.scores.find((score) => score.player.equals(player)) || null
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
        const playerRef = scoreWithPlayerRef.player
        if (playerRef instanceof DocumentReference) {
          playersPromises.push(Player.loadServerFromRef(playerRef))
        } else {
          throw Error(
            `Impossible to load a Game Room from snapshot ${snapshot}: 
            one of the instances of scores does not have a field 'player' instance of DocumentReference.`
          )
        }
      }
      const players: Player[] = await Promise.all(playersPromises)
      const scores: Score[] = scoresWithPlayerRef.map(
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

  async addPlayerServer(player: Player) {
    const score = new Score(0, player)
    await updateDoc(this.ref, { scores: arrayUnion(score.doc) })
  }

  async removePlayerServer(player: Player) {
    const score: Score | null = this.getScore(player)
    if (score) {
      await updateDoc(this.ref, { scores: arrayRemove(score.doc) })
    } else {
      throw Error(
        `Impossible to remove player ${player} on game room ${this}: player not in game room.`
      )
    }
  }

  async startGameServer() {
    await updateDoc(this.ref, { startTime: Date.now() })
  }

  async sendAnswerServer(answer: QuizAnswer, player: Player) {
    if (answer.correct) {
      const score = this.getScore(player)
      if (score) {
        await updateDoc(this.ref, { scores: arrayRemove(score.doc) })
        score.addGoodAnswer()
        await updateDoc(this.ref, { scores: arrayUnion(score.doc) })
      }
    }
  }

  async restart() {
    await this.startGameServer()
  }

  static async createGameRoom(gameRoomId: string): Promise<GameRoom> {
    const newGameRoomRef = doc(gameRoomsRef, gameRoomId)
    await setDoc(newGameRoomRef, {scores: []})
    return await GameRoom.loadServerFromId(gameRoomId)
  }
}
