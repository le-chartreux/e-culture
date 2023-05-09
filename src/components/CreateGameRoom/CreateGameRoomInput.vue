<script lang="ts">
import { defineComponent } from 'vue'

import { GameRoom } from '@/firebase/entities/GameRoom'

export default defineComponent({
  data() {
    return {
      gameRoomId: null as string | null
    }
  },
  methods: {
    createGameRoom() {
      if (this.gameRoomId) {
        GameRoom.createGameRoom(this.gameRoomId)
      } else {
        throw Error(`Impossible to create a Game Room with gameRoomId ${this.gameRoomId}.`)
      }
    }
  }
})
</script>

<template>
  <div id="create-game-route-input">
    <input type="text" v-model="gameRoomId" placeholder="Game Room ID" />
    <div v-if="gameRoomId">
      <router-link :to="'/game-room/' + gameRoomId" class="pseudo-button doodle-border" @click="createGameRoom"
        >Create Game Room '{{ gameRoomId }}'</router-link
      >
    </div>
    <div v-else>
      <p>Please enter a Game Room ID</p>
    </div>
  </div>
</template>

<style scoped>
#create-game-route-input {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#create-game-route-input > * {
  margin: 10px;
  padding: 5px;
}

#create-game-route-input > input {
  text-align: center;
}
</style>
