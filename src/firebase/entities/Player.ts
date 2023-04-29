import { doc, setDoc } from 'firebase/firestore'

import { playersRef } from "@/firebase";

export class Player {
  pseudo: string
  id: string
  static LOCAL_STORAGE_KEY = 'player'

  constructor(pseudo: string, id: string) {
    this.pseudo = pseudo
    this.id = id
  }

  static generate(): Player {
    const maxId = 10 ** 12
    const id = Math.floor(Math.random() * maxId)
    const pseudo = `user${id}`
    return new Player(pseudo, id.toString())
  }

  saveOnLocalStorage(): void {
    localStorage.setItem(Player.LOCAL_STORAGE_KEY, JSON.stringify(this))
  }

  static storedOnLocalStorage(): boolean {
    return localStorage.getItem(Player.LOCAL_STORAGE_KEY) != null
  }

  static loadFromLocalStorage(): Player {
    const localPlayer = localStorage.getItem(Player.LOCAL_STORAGE_KEY)
    if (localPlayer) {
      const playerDict = JSON.parse(localPlayer)
      return new Player(playerDict.pseudo, playerDict.id)
    } else {
      throw Error('Loading player from local storage but not in local storage.')
    }
  }

  get ref() {
    return Player.getRef(this.id)
  }

  static getRef(id: string) {
    return doc(playersRef, id)
  }

  /* Save on firebase */
  push(): void {
    setDoc(this.ref, Object.assign({}, this))
      .then(() => console.debug(`Player ${this} pushed to firebase`))
      .catch((reason) => {console.error(`Player ${this} not pushed to firebase: ${reason}`)})
  }
}
