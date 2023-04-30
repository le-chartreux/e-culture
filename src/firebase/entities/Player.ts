import { doc, getDoc, setDoc, DocumentReference, DocumentSnapshot } from 'firebase/firestore'

import { playersRef } from '@/firebase'

export class Player {
  id: string
  pseudo: string
  static LOCAL_STORAGE_KEY = 'player'

  constructor(id: string, pseudo: string) {
    this.id = id
    this.pseudo = pseudo
  }

  /* Create a random player */
  static generate(): Player {
    const maxId = 10 ** 12
    const id = Math.floor(Math.random() * maxId)
    const pseudo = `user${id}`
    return new Player(id.toString(), pseudo)
  }

  saveLocal(): void {
    localStorage.setItem(Player.LOCAL_STORAGE_KEY, JSON.stringify(this))
  }

  static savedLocally(): boolean {
    return localStorage.getItem(Player.LOCAL_STORAGE_KEY) != null
  }

  static loadLocal(): Player {
    const localPlayer: string | null = localStorage.getItem(Player.LOCAL_STORAGE_KEY)
    if (localPlayer) {
      const playerDict = JSON.parse(localPlayer)
      return new Player(playerDict.id, playerDict.pseudo)
    } else {
      throw Error('Loading player from local storage but not in local storage.')
    }
  }

  get ref(): DocumentReference {
    return Player.getRef(this.id)
  }

  static getRef(id: string): DocumentReference {
    return doc(playersRef, id)
  }

  static async loadServerFromRef(ref: DocumentReference): Promise<Player> {
    const doc: DocumentSnapshot = await getDoc(ref)
    return Player.loadFromSnapshot(doc)
  }

  saveServer(): void {
    setDoc(this.ref, Object.assign({}, this))
      .then(() => console.debug(`Player ${this} saved on firestore.`))
      .catch((reason) => {
        console.error(`Player ${this} not saved on firestore: ${reason}.`)
      })
  }

  static loadFromSnapshot(snapshot: DocumentSnapshot): Player {
    const pseudo = snapshot.data()?.pseudo
    if (pseudo) {
      return new Player(snapshot.id, pseudo)
    } else {
      throw Error(`Impossible to create Player from ${snapshot}: pseudo not in data.`)
    }
  }
}
