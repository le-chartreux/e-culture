<template>
  <div id="join-random-game">
    <h2>Join a Random Game</h2>
    <router-link to="/game/random" class="pseudo-button">Join a random game</router-link>
  </div>
</template>

<style scoped>
#join-random-game {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

#join-random-game > * {
    margin: 10px;
    padding: 5px;
}

</style>