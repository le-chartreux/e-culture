<script lang="ts">
import { defineComponent } from 'vue'
import {
  onSnapshot,
  DocumentSnapshot,
  type Unsubscribe
} from 'firebase/firestore'

import HeaderDefault from '@/components/Header/HeaderDefault.vue'
import GameRoomContent from '@/components/GameRoom/GameRoomContent.vue'
import { GameRoom } from '@/firebase/entities/GameRoom'
import { Player } from '@/firebase/entities/Player'

export default defineComponent({
  data() {
    return {
      gameRoomId: this.$route.params.id as string,
      gameRoom: null as null | GameRoom,
      player: Player.loadLocal(),
      unSubscribeGameRoom: null as null | Unsubscribe
    }
  },
  components: { GameRoomContent, HeaderDefault },
  methods: {
    async setGameRoom() {
      this.gameRoom = await GameRoom.loadServerFromId(this.gameRoomId)
    },
    subscribeGameRoom() {
      if (this.gameRoom) {
        this.unSubscribeGameRoom = onSnapshot(
          this.gameRoom.ref,
          async (snapshot: DocumentSnapshot) => this.gameRoom = await GameRoom.loadServerFromSnapshot(snapshot)
        )
      } else {
        throw Error("Impossible to subscribe to the gameRoom: no gameRoom.")
      }
    },
    async joinGameRoom() {
      if (this.gameRoom) {
        await this.gameRoom.addPlayerServer(this.player)
      } else {
        throw Error("Impossible to add player to the gameRoom: no gameRoom.")
      }
    },
    async quitGameRoom() {
      if (this.gameRoom) {
        await this.gameRoom.removePlayerServer(this.player)
      } else {
        throw Error("Impossible to add player to the gameRoom: no gameRoom.")
      }
    }
  },
  mounted() {
    this.setGameRoom()
      .then(() => { this.subscribeGameRoom(); this.joinGameRoom(); })
  },
  unmounted() {
    this.quitGameRoom()
    if (this.unSubscribeGameRoom) {
      this.unSubscribeGameRoom()
    }
  }
})
</script>

<template>
  <div id="game-room">
    <HeaderDefault />
    <div id="game-room-information">
      <h2>Game Room {{ gameRoomId }}</h2>
      <GameRoomContent v-if="gameRoom" :game-room="gameRoom" />
      <p v-else>Acquiring game room data...</p>
    </div>
  </div>
</template>

<style scoped>
#game-room {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  padding: 1rem;
}

#game-room-information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: large;
}
</style>
