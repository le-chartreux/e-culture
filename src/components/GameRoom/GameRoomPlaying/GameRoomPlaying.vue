<script lang="ts">
import { defineComponent, type PropType } from 'vue'

import type { GameRoom } from '@/firebase/entities/GameRoom'
import GameRoomPlayingQuiz from '@/components/GameRoom/GameRoomPlaying/GameRoomPlayingQuiz.vue'
import type { QuizAnswer } from '@/firebase/entities/QuizAnswer'
import { Player } from '@/firebase/entities/Player'

export default defineComponent({
  data() {
    return {
      currentQuiz: this.gameRoom.game.currentQuiz,
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
    updateLoopCurrentQuiz() {
      if (!this.gameRoom.game.ended) {
        this.currentQuiz = this.gameRoom.game.currentQuiz
        setTimeout(this.updateLoopCurrentQuiz, 100)
      }
    },
    sendAnswer(answer: QuizAnswer) {
      this.gameRoom.sendAnswerServer(answer, this.player)
    }
  },
  mounted() {
    this.updateLoopCurrentQuiz()
  },
  components: { GameRoomPlayingQuiz }
})
</script>

<template>
  <GameRoomPlayingQuiz :quiz="currentQuiz" @answer-selected="sendAnswer" />
</template>
