<script lang="ts">
import { defineComponent } from 'vue'
import { gamesRef } from "@/firebase";
import { doc } from "firebase/firestore";

import HeaderDefault from '@/components/Header/HeaderDefault.vue'
import PlayersList from "@/components/PlayersList.vue";
import type { Game } from "@/firebase/entities/Game";


export default defineComponent({
  data() {
    return {
      gameId: this.$route.params.id as string,
      game: Object as unknown as Game
    }
  },
  components: {HeaderDefault, PlayersList},
  watch: {
    gameId: {
      immediate: true,
      handler(gameId: string) {
        this.$firestoreBind("game", doc(gamesRef, gameId))
      }
    }
  }
})
</script>

<template>
  <div id="game">
    <HeaderDefault />
    <div id="game-information">
      <h2>Game {{gameId}}</h2>
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
