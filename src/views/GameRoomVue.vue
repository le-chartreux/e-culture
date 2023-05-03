<script lang="ts">
import { defineComponent } from 'vue'
import {
  updateDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
  DocumentSnapshot,
  type Unsubscribe
} from 'firebase/firestore'

import HeaderDefault from '@/components/Header/HeaderDefault.vue'
import GameRoomContent from '@/components/GameRoom/GameRoomContent.vue'
import { GameRoom } from '@/firebase/entities/GameRoom'
import { Player } from '@/firebase/entities/Player'
import { Score } from "@/firebase/entities/Score";

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
    async subscribeGameRoom() {
      this.unSubscribeGameRoom = onSnapshot(
        GameRoom.getRef(this.gameRoomId),
        async (snapshot: DocumentSnapshot) => {
          this.gameRoom = await GameRoom.loadServerFromSnapshot(snapshot)
        }
      )
    },
    unsubscribeGameRoomIfSubscribed() {
      if (this.unSubscribeGameRoom) {
        this.unSubscribeGameRoom()
      }
    },
    async joinGameRoom() {
      await updateDoc(
        GameRoom.getRef(this.gameRoomId),
        { scores: arrayUnion({ player: this.player.ref, points: 0 }) }
      )
    },
    async quitGameRoom() {
      if (this.gameRoom) {
        const score = this.gameRoom.getScore(this.player) || new Score(0, this.player)
        await updateDoc(this.gameRoom.ref, { scores: arrayRemove(score.doc) })
      }
    }
  },
  mounted() {
    this.setGameRoom()
    this.subscribeGameRoom()
    this.joinGameRoom()
  },
  unmounted() {
    this.quitGameRoom()
    this.unsubscribeGameRoomIfSubscribed()
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
