<template>
  <div id="join-random-game-room">
    <h2>Join a Random Game Room</h2>
    <router-link to="/game-room/random" class="pseudo-button doodle-border">Join a random Game Room</router-link>
  </div>
</template>

<style scoped>
#join-random-game-room {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

#join-random-game-room > * {
  margin: 10px;
  padding: 5px;
}
</style>
