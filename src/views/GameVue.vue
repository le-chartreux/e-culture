<script lang="ts">
import { defineComponent } from 'vue'
import { updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'

import HeaderDefault from '@/components/Header/HeaderDefault.vue'
import PlayersList from '@/components/PlayersList.vue'
import { Game } from '@/firebase/entities/Game'
import { Player } from '@/firebase/entities/Player'

export default defineComponent({
  data() {
    return {
      gameId: this.$route.params.id as string,
      game: Object as unknown as Game,
      player: Player.loadFromLocalStorage()
    }
  },
  components: { HeaderDefault, PlayersList },
  watch: {
    gameId: {
      immediate: true,
      handler() {
        this.$firestoreBind('game', Game.getRef(this.gameId))
      }
    }
  },
  mounted() {
    /* adding the player to the list of players of this game */
    updateDoc(Game.getRef(this.gameId), { players: arrayUnion(this.player.ref) })
  },
  unmounted() {
    /* removing the player from the list of players of this game */
    updateDoc(Game.getRef(this.gameId), { players: arrayRemove(this.player.ref) })
  }
})
</script>

<template>
  <div id="game">
    <HeaderDefault />
    <div id="game-information">
      <h2>Game {{ gameId }}</h2>
      <p>Waiting for the game to start...</p>
      <p>Players in this game:</p>
      <PlayersList :players="game.players"></PlayersList>
    </div>
  </div>
</template>

<style scoped>
#game {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  padding: 1rem;
}

#game-information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: large;
}
</style>
