<script lang="ts">
import JoinGameRoomFromId from '@/components/JoinGameRoom/JoinGameRoomFromId.vue'
import JoinGameRoomRandom from '@/components/JoinGameRoom/JoinGameRoomRandom.vue'
import HeaderDefault from '@/components/Header/HeaderDefault.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { JoinGameRoomFromId, JoinGameRoomRandom, HeaderDefault }
})
</script>

<template>
  <div id="join-game-room">
    <HeaderDefault />
    <div id="different-join">
      <JoinGameRoomRandom />
      <JoinGameRoomFromId />
    </div>
  </div>
</template>

<style scoped>
#join-game-room {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  padding: 1rem;
}

#different-join {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: large;
  flex-wrap: wrap-reverse;
  flex-grow: 1;
}

#different-join > * {
  min-width: 25%;
}
</style>
