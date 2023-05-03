<script lang="ts">
import { defineComponent, type PropType } from 'vue'

import GameRoomWaiting from '@/components/GameRoom/GameRoomWaiting.vue'
import PlayersList from '@/components/PlayersList.vue'
import GameRoomPlaying from '@/components/GameRoom/GameRoomPlaying.vue'
import type { GameRoom } from '@/firebase/entities/GameRoom'

export default defineComponent({
  data() {
    return {
      gameEnded: true
    }
  },
  props: {
    gameRoom: {
      type: Object as PropType<GameRoom>,
      required: true
    }
  },
  watch: {
    gameRoom: {
      // to set the initial value & detect starting the game again
      handler() {
        this.gameEnded = this.gameRoom.game.ended
      },
      immediate: true
    }
  },
  methods: {
    updateLoopGameEnded() {
      // since it's computed, we have to update it with timeout to track it
      this.gameEnded = this.gameRoom.game.ended
      if (!this.gameEnded) {
        setTimeout(() => this.updateLoopGameEnded(), 100)
      }
    }
  },
  mounted() {
    this.updateLoopGameEnded()
  },
  components: { GameRoomPlaying, PlayersList, GameRoomWaiting }
})
</script>

<template>
  <p>Players in this Game Room:</p>
  <PlayersList :players="gameRoom.players" :owner="gameRoom.owner"></PlayersList>
  <p v-if="gameEnded">game ended</p>
  <GameRoomPlaying v-else-if="gameRoom.game.started" :game-room="gameRoom" />
  <GameRoomWaiting v-else :game-room="gameRoom" />
</template>
