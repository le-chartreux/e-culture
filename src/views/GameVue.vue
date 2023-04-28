<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      gameId: this.$route.params.id
    }
  }
})
</script>

<script setup lang="ts">
import HeaderDefault from '@/components/Header/HeaderDefault.vue'
</script>

<template>
  <div id="game">
    <HeaderDefault />
    <p>Game with ID {{ gameId }} here</p>
  </div>
</template>

<style scoped>
#game {
    display: flex;
    flex-direction: column;
    height: 100dvh;
    padding: 1rem;
}
</style>
