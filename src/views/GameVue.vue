<script lang="ts">
import HeaderDefault from '@/components/Header/HeaderDefault.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      gameId: this.$route.params.id
    }
  },
  components: {HeaderDefault}
})
</script>

<template>
  <div id="game">
    <HeaderDefault />
    <div id="game-information">
      <h2>Game {{gameId}}</h2>
      <p>Waiting for the game to start...</p>
    </div>
  </div>
</template>

<style scoped>
#game {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  padding: 1rem;
}

#game-information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: large;
}

</style>
