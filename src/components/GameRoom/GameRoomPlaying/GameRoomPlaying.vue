<script lang="ts">
import { defineComponent, type PropType } from 'vue'

import type { GameRoom } from '@/firebase/entities/GameRoom'
import GameRoomPlayingQuiz from '@/components/GameRoom/GameRoomPlaying/GameRoomPlayingQuiz.vue'
import type { QuizAnswer } from '@/firebase/entities/QuizAnswer'
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
  },
  methods: {
    runUpdateLoop() {
      if (!this.gameRoom.game.ended) {
        this.$forceUpdate()
        setTimeout(this.runUpdateLoop, 300)
      }
    },
    sendAnswer(answer: QuizAnswer) {
      this.gameRoom.sendAnswerServer(answer, this.player)
    }
  },
  mounted() {
    this.runUpdateLoop()
  },
  components: { GameRoomPlayingQuiz }
})
</script>

<template>
  <div id="game-room-playing">
    <p>Quiz {{ gameRoom.game.indexCurrentQuiz + 1 }} of {{ gameRoom.game.quizzes.length }}</p>
    <p>Remaining time: {{ gameRoom.game.timeUntilNextQuiz }}</p>
    <GameRoomPlayingQuiz :quiz="gameRoom.game.currentQuiz" @answer-selected="sendAnswer" />
  </div>
</template>

<style scoped>
#game-room-playing {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>