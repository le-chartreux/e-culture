<script lang="ts">
import { defineComponent } from 'vue'

import HeaderDefault from '@/components/Header/HeaderDefault.vue'
import CreateGameRoomInput from '@/components/CreateGameRoom/CreateGameRoomInput.vue'

export default defineComponent({
  components: { HeaderDefault, CreateGameRoomInput }
})
</script>

<template>
  <div id="create-game-room">
    <HeaderDefault />
    <main>
      <h2>Create a Game Room</h2>
      <CreateGameRoomInput />
    </main>
  </div>
</template>

<style scoped>
#create-game-room {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  padding: 1rem;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
</style>
