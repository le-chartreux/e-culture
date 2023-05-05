<script lang="ts">
import { defineComponent, type PropType } from 'vue'

import PlayersList from '@/components/PlayersList.vue'
import { Player } from '@/firebase/entities/Player'
import type { GameRoom } from '@/firebase/entities/GameRoom'

export default defineComponent({
  data() {
    return {
      player: Player.loadLocal()
    }
  },
  props: {
    gameRoom: {
      type: Object as PropType<GameRoom>,
      required: true
    }
  },
  components: { PlayersList }
})
</script>

<template>
  <PlayersList :players="gameRoom.players" :owner="gameRoom.owner"></PlayersList>
  <button class="pseudo-button" v-if="gameRoom.isOwner(player)" @click="gameRoom.startGameServer">
    Start game
  </button>
  <p v-else>Waiting for the owner to start the game...</p>
</template>
