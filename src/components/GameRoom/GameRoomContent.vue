<script lang="ts">
import { defineComponent, type PropType } from 'vue'

import GameRoomWaiting from '@/components/GameRoom/GameRoomWaiting.vue'
import GameRoomPlaying from '@/components/GameRoom/GameRoomPlaying/GameRoomPlaying.vue'
import GameRoomScores from '@/components/GameRoom/GameRoomScores.vue'
import type { GameRoom } from '@/firebase/entities/GameRoom'

export default defineComponent({
  data() {
    return {
      gameEnded: null as boolean | null
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
  components: { GameRoomPlaying, GameRoomWaiting, GameRoomScores }
})
</script>

<template>
  <div v-if="gameRoom.game.started">
    <GameRoomScores :scores="gameRoom.scores" />
    <p v-if="gameEnded">game ended</p>
    <GameRoomPlaying v-else :game-room="gameRoom" />
  </div>
  <GameRoomWaiting v-else :game-room="gameRoom" />
</template>
