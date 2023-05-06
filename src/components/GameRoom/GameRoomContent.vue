<script lang="ts">
import { defineComponent, type PropType } from 'vue'

import GameRoomWaiting from '@/components/GameRoom/GameRoomWaiting.vue'
import GameRoomPlaying from '@/components/GameRoom/GameRoomPlaying/GameRoomPlaying.vue'
import GameRoomScores from '@/components/GameRoom/GameRoomScores.vue'
import GameRoomEnded from '@/components/GameRoom/GameRoomEnded.vue'
import type { GameRoom } from '@/firebase/entities/GameRoom'

export default defineComponent({
  data() {
    return {
      updateLoopRunning: false
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
      handler() {
        if (! this.gameRoom.game.ended && ! this.updateLoopRunning) {
          this.runUpdateLoop()
        }
      }
    }
  },
  methods: {
    runUpdateLoop() {
      this.$forceUpdate()
      if (!this.gameRoom.game.ended) {
        this.updateLoopRunning = true
        setTimeout(this.runUpdateLoop, 300)
      } else {
        this.updateLoopRunning = false
      }
    }
  },
  mounted() {
    this.runUpdateLoop()
  },
  components: { GameRoomEnded, GameRoomPlaying, GameRoomWaiting, GameRoomScores }
})
</script>

<template>
  <div v-if="gameRoom.game.started">
    <GameRoomScores :scores="gameRoom.scores" />
    <GameRoomEnded v-if="gameRoom.game.ended" :game-room="gameRoom" />
    <GameRoomPlaying v-else :game-room="gameRoom" />
  </div>
  <GameRoomWaiting v-else :game-room="gameRoom" />
</template>
