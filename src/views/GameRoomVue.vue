<script lang="ts">
import { defineComponent } from 'vue'
import { updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'

import HeaderDefault from '@/components/Header/HeaderDefault.vue'
import PlayersList from '@/components/PlayersList.vue'
import { GameRoom } from '@/firebase/entities/GameRoom'
import { Player } from '@/firebase/entities/Player'

export default defineComponent({
  data() {
    return {
      gameRoomId: this.$route.params.id as string,
      gameRoom: Object as unknown as GameRoom,
      player: Player.loadLocal()
    }
  },
  components: { HeaderDefault, PlayersList },
  watch: {
    gameRoomId: {
      immediate: true,
      handler() {
        this.$firestoreBind('gameRoom', GameRoom.getRef(this.gameRoomId))
      }
    }
  },
  mounted() {
    /* adding the player to the list of players of this game room */
    updateDoc(GameRoom.getRef(this.gameRoomId), { players: arrayUnion(this.player.ref) })
  },
  unmounted() {
    /* removing the player from the list of players of this game room */
    updateDoc(GameRoom.getRef(this.gameRoomId), { players: arrayRemove(this.player.ref) })
  }
})
</script>

<template>
  <div id="game-room">
    <HeaderDefault />
    <div id="game-room-information">
      <h2>Game Room {{ gameRoomId }}</h2>
      <p>Waiting for the game to start...</p>
      <p>Players in this Game Room:</p>
      <PlayersList :players="gameRoom.players"></PlayersList>
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
