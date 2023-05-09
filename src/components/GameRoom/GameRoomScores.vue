<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { Player } from '@/firebase/entities/Player'
import type { Score } from '@/firebase/entities/Score'

export default defineComponent({
  data() {
    return {
      player: Player.loadLocal()
    }
  },
  props: {
    scores: {
      type: Object as PropType<Score[]>,
      required: true
    }
  }
})
</script>

<template>
  <div id="scores" class="doodle-border">
    <p>Scores:</p>
    <ul id="scores-ul">
      <li v-for="(score, index) in scores" :key="index">
        <span id="player-name">
          <span v-if="player.equals(score.player)">You</span>
          <span v-else>{{ score.player.pseudo }}</span> </span
        >:
        <span>{{ score.points }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
#scores {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#scores-ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

#scores-ul > li {
  list-style-type: none;
  margin: 10px;
}
</style>
