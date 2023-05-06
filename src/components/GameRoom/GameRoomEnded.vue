<script lang="ts">
import { defineComponent, type PropType } from 'vue'

import type { GameRoom } from '@/firebase/entities/GameRoom'
import { Player } from '@/firebase/entities/Player'

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
  }
})
</script>

<template>
  <div id="main-game-ended">
    <p>Game ended</p>
    <button class="pseudo-button" v-if="gameRoom.isOwner(player)" @click="gameRoom.restart()">
      Restart
    </button>
  </div>
</template>

<style scoped>
#main-game-ended {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
