<script lang="ts">
import { defineComponent, type PropType } from 'vue'

import GameRoomWaiting from '@/components/GameRoom/GameRoomWaiting.vue'
import GameRoomPlaying from '@/components/GameRoom/GameRoomPlaying/GameRoomPlaying.vue'
import GameRoomScores from '@/components/GameRoom/GameRoomScores.vue'
import type { GameRoom } from '@/firebase/entities/GameRoom'

export default defineComponent({
  data() {return {}},
  props: {
    gameRoom: {
      type: Object as PropType<GameRoom>,
      required: true
    }
  },
  methods: {
    runUpdateLoop() {
      if (!this.gameRoom.game.ended) {
        this.$forceUpdate()
        setTimeout(this.runUpdateLoop, 100)
      }
    }
  },
  mounted() {
    this.runUpdateLoop()
  },
  components: { GameRoomPlaying, GameRoomWaiting, GameRoomScores }
})
</script>

<template>
  <div v-if="gameRoom.game.started">
    <GameRoomScores :scores="gameRoom.scores" />
    <p v-if="gameRoom.game.ended">game ended</p>
    <GameRoomPlaying v-else :game-room="gameRoom" />
  </div>
  <GameRoomWaiting v-else :game-room="gameRoom" />
</template>
