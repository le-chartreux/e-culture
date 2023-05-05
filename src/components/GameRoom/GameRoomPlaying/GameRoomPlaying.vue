<script lang="ts">
import { defineComponent, type PropType } from 'vue'

import type { GameRoom } from '@/firebase/entities/GameRoom'
import GameRoomPlayingQuiz from '@/components/GameRoom/GameRoomPlaying/GameRoomPlayingQuiz.vue'
import type { QuizAnswer } from '@/firebase/entities/QuizAnswer'
import { Player } from '@/firebase/entities/Player'
import {Game} from "@/firebase/entities/Game";

export default defineComponent({
  data() {
    return {
      currentQuiz: this.gameRoom.game.currentQuiz,
      player: Player.loadLocal(),
      timeUntilNextQuiz: Game.SECONDS_BY_QUESTION
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
    updateLoopTimeUntilNextQuiz() {
      if (!this.gameRoom.game.ended) {
        this.timeUntilNextQuiz = this.gameRoom.game.timeUntilNextQuiz
        setTimeout(this.updateLoopTimeUntilNextQuiz, 500)
      }
    },
    sendAnswer(answer: QuizAnswer) {
      this.gameRoom.sendAnswerServer(answer, this.player)
    }
  },
  mounted() {
    this.updateLoopCurrentQuiz()
    this.updateLoopTimeUntilNextQuiz()
  },
  components: { GameRoomPlayingQuiz }
})
</script>

<template>
  <GameRoomPlayingQuiz :quiz="currentQuiz" :remaining-time="timeUntilNextQuiz" @answer-selected="sendAnswer" />
</template>
