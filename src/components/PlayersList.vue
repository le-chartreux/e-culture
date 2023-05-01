<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { Player } from '@/firebase/entities/Player'

export default defineComponent({
  data() {
    return {
      player: Player.loadLocal()
    }
  },
  props: {
    players: {
      type: Object as PropType<Player[]>,
      required: true
    },
    owner: {
      type: Object as PropType<Player | null>,
      required: true
    }
  }
})
</script>

<template>
  <div id="player-list">
    <ul>
      <li v-for="playerIterated in players" :key="playerIterated.id">
        <span v-if="player.equals(playerIterated)">You</span>
        <span v-else>{{ playerIterated.pseudo }}</span>
        <span v-if="playerIterated.equals(owner)"> 👑</span>
      </li>
    </ul>
  </div>
</template>
