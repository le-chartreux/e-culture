<script lang="ts">
import { defineComponent, type PropType } from 'vue'

import type { Quiz } from '@/firebase/entities/Quiz'
import type { QuizAnswer } from '@/firebase/entities/QuizAnswer'

export default defineComponent({
  data() {
    return {
      selectedAnswer: null as null | QuizAnswer
    }
  },
  props: {
    quiz: {
      type: Object as PropType<Quiz>,
      required: true
    }
  },
  emits: ['answerSelected'],
  watch: {
    quiz() {
      this.selectedAnswer = null
    }
  },
  computed: {
    shuffledAnswers(): QuizAnswer[] {
      const shuffledAnswers = [...this.quiz.answers]
      for (let i = shuffledAnswers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]]
      }
      return shuffledAnswers
    }
  },
  methods: {
    selectAnswer(answer: QuizAnswer) {
      this.selectedAnswer = answer
      this.$emit('answerSelected', answer)
    }
  }
})
</script>

<template>
  <div id="quiz">
    <h3>{{ quiz.question }}</h3>
    <p v-if="selectedAnswer" id="result">
      The answer is {{quiz.correctAnswer.answer}}
      <br>
      You answered <span :id="selectedAnswer.correct ? 'correct-indicator' : 'incorrect-indicator'">{{selectedAnswer.answer}}</span>
      <br />
      Waiting for the next question...
    </p>
    <ul id="answers" v-else>
      <li v-for="(answer, index) in shuffledAnswers" :key="index">
        <button class="pseudo-button" @click="selectAnswer(answer)">
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

#result {
  text-align: center;
}

#correct-indicator {
  color: green;
}

#incorrect-indicator {
  color: red;
}
</style>
