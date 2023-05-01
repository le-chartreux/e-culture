<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { Player } from '@/firebase/entities/Player'
import type { GameRoom } from '@/firebase/entities/GameRoom'

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
  }
})
</script>

<template>
  <p>questions:</p>
  <ul>
    <li v-for="quiz in gameRoom.game.quizzes" :key="quiz.id">{{ quiz.question }}</li>
  </ul>
</template>
