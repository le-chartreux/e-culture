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
import GameRoomQuiz from '@/components/GameRoom/GameRoomQuiz.vue'
import GameRoomWaiting from '@/components/GameRoom/GameRoomWaiting.vue'
import PlayersList from '@/components/PlayersList.vue'
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
  components: { HeaderDefault, PlayersList, GameRoomQuiz, GameRoomWaiting },
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
      await updateDoc(GameRoom.getRef(this.gameRoomId), { players: arrayUnion(this.player.ref) })
    },
    async quitGameRoom() {
      await updateDoc(GameRoom.getRef(this.gameRoomId), { players: arrayRemove(this.player.ref) })
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
      <div v-if="gameRoom">
        <p>Players in this Game Room:</p>
        <PlayersList :players="gameRoom.players" :owner="gameRoom.owner"></PlayersList>
        <GameRoomQuiz v-if="gameRoom.started" :game-room="gameRoom" />
        <GameRoomWaiting v-else :game-room="gameRoom" />
      </div>
      <div v-else>
        <p>Acquiring game room data...</p>
      </div>
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
