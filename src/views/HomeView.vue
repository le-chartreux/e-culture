<script setup lang="ts">
import UserInfoSmall from '@/components/UserInfoSmall.vue'
</script>

<template>
  <header>
    <UserInfoSmall />
  </header>

  <main>
    <img src="/src/assets/logo/application.png" alt="application logo" />
    <div id="actions">
      <router-link class="pseudo-button" to="/create-game">Create a game</router-link>
      <router-link class="pseudo-button" to="/join-game">Join a game</router-link>
      <router-link class="pseudo-button" to="/about">About Us</router-link>
    </div>
  </main>

  <footer>
    <img src="/src/assets/logo/company.png" alt="company logo" />
  </footer>
</template>

<style scoped>
header {
  display: flex;
  justify-content: end;
  width: 100%;
  flex-grow: 1;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 8;
}

main > img {
  flex: 5;
}

#actions {
  width: 40%;
  margin: 1rem;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

footer {
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
  flex-grow: 1;
}
</style>
