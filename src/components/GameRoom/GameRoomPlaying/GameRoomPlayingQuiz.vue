<script lang="ts">
import { defineComponent, type PropType } from 'vue'

import type { Quiz } from '@/firebase/entities/Quiz'

export default defineComponent({
  props: {
    quiz: {
      type: Object as PropType<Quiz>,
      required: true
    }
  },
  emits: ['answerSelected']
})
</script>

<template>
  <div id="quiz">
    <h3>{{ quiz.question }}</h3>
    <ul id="answers">
      <li v-for="(answer, index) in quiz.answers" :key="index">
        <button class="pseudo-button" @click="$emit('answerSelected', answer)">
          {{ answer.answer }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#quiz {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#answers {
  display: grid;
  grid-template:
    '. .'
    '. .';
}

#answers > li {
  list-style-type: none;
}

#answers > li > button {
  font-size: large;
  min-height: 20dvh;
  min-width: 30dvw;
}
</style>
