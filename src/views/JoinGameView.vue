<script setup lang="ts">
import JoinGameFromId from '@/components/JoinGame/JoinGameFromId.vue'
import JoinGameRandom from '@/components/JoinGame/JoinGameRandom.vue'
import HeaderDefault from '@/components/Header/HeaderDefault.vue'
</script>

<template>
  <div id="join-game">
    <HeaderDefault />
    <div id="different-join">
      <JoinGameRandom />
      <JoinGameFromId />
    </div>
  </div>
</template>

<style scoped>
#join-game {
    display: flex;
    flex-direction: column;
    height: 100dvh;
    padding: 1rem;
}

#different-join {
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
    font-size: large;
}

#different-join > * {
    min-width: 25%;
}

</style>
