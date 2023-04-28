<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data: () => {
    return {
      gameId: ''
    }
  }
})
</script>

<template>
  <div id="join-game-from-id">
    <h2>Join a Game from an ID</h2>
    <input type="text" v-model="gameId" placeholder="Game ID" />
    <div v-if="gameId">
      <router-link :to="'/game/' + gameId" class="pseudo-button"
        >Join game '{{ gameId }}'</router-link
      >
    </div>
    <div v-else>
      <p>Please enter a Game ID</p>
    </div>
  </div>
</template>

<style scoped>
#join-game-from-id {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

#join-game-from-id > * {
  margin: 10px;
  padding: 5px;
}

#join-game-from-id > input {
  text-align: center;
}
</style>
