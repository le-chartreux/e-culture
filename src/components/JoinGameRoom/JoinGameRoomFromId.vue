<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data: () => {
    return {
      gameRoomId: ''
    }
  }
})
</script>

<template>
  <div id="join-game-room-from-id">
    <h2>Join a Game Room from an ID</h2>
    <input type="text" v-model="gameRoomId" placeholder="Game Room ID" />
    <div v-if="gameRoomId">
      <router-link :to="'/game-room/' + gameRoomId" class="pseudo-button"
        >Join Game Room '{{ gameRoomId }}'</router-link
      >
    </div>
    <div v-else>
      <p>Please enter a Game Room ID</p>
    </div>
  </div>
</template>

<style scoped>
#join-game-room-from-id {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

#join-game-room-from-id > * {
  margin: 10px;
  padding: 5px;
}

#join-game-room-from-id > input {
  text-align: center;
}
</style>
