<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { updateDoc } from 'firebase/firestore';

import type { GameRoom } from '@/firebase/entities/GameRoom'
import GameRoomPlayingQuiz from "@/components/GameRoom/GameRoomPlaying/GameRoomPlayingQuiz.vue";
import type { QuizAnswer } from "@/firebase/entities/QuizAnswer";

export default defineComponent({
  data() {
    return {
      currentQuiz: this.gameRoom.game.currentQuiz
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
    async sendAnswer(answer: QuizAnswer) {
      alert('answer sended')
      if (answer.correct) {
        await updateDoc(
          this.gameRoom.ref,
          {}
        )
      }
    }
  },
  mounted() {
    this.updateLoopCurrentQuiz()
  },
  components: {GameRoomPlayingQuiz}
})
</script>

<template>
  <GameRoomPlayingQuiz :quiz="currentQuiz" @answer-selected="sendAnswer"/>
</template>
