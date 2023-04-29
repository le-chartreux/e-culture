<script lang="ts">
import { defineComponent } from 'vue'
import { Player } from '@/firebase/entities/Player'
export default defineComponent({
  data() {
    return {
      player: Player.loadFromLocalStorage()
    }
  }
})
</script>

<template>
  <p>{{ player.pseudo }}</p>
</template>
