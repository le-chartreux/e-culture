<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { Player } from '@/firebase/entities/Player'

export default defineComponent({
  props: {
    players: Object as PropType<Player[]>
  }
})
</script>

<template>
  <div id="player-list">
    <ul>
      <li v-for="player in players" :key="player.id">{{ player.pseudo }}</li>
    </ul>
  </div>
</template>
