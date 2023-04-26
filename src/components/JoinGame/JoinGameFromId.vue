<template>
  <h2>Join a Game from an ID</h2>
  <input type="text" v-model="gameId" placeholder="Game ID">
  <div v-if="gameId">
    <router-link :to="'/game/' + gameId" class="pseudo-button">Join game {{gameId}}</router-link>
  </div>
  <div v-else>
    <p>Please enter a Game ID</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data: () => {return {
    gameId: ""
  }}

});
</script>

