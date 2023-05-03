<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'

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
    async sendAnswer(answer: QuizAnswer) {
      if (answer.correct) {
        const score = this.gameRoom.getScore(this.player)
        if (score) {
          await updateDoc(this.gameRoom.ref, { scores: arrayRemove(score.doc) })
          score.addGoodAnswer()
          await updateDoc(this.gameRoom.ref, { scores: arrayUnion(score.doc) })
        }
      }
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
