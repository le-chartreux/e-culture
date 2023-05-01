<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { GameRoom } from '@/firebase/entities/GameRoom'

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
    updateLoopCurrentQuiz(){
      if (! this.gameRoom.game.ended){
        this.currentQuiz = this.gameRoom.game.currentQuiz
        setTimeout(this.updateLoopCurrentQuiz, 100)
      }
    }
  },
  mounted() {
    this.updateLoopCurrentQuiz()
  }
})
</script>

<template>
  <p>questions:</p>
  <p>current quiz : {{}}</p>
  <ul>
    <li v-for="quiz in gameRoom.game.quizzes" :key="quiz.id">
      {{ quiz.question }} <span v-if="currentQuiz.id === quiz.id">CURRENT</span>
    </li>
  </ul>
</template>
