<script lang="ts">
import HeaderDefault from '@/components/Header/HeaderDefault.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {HeaderDefault}
})
</script>

<template>
  <div id="home">
    <HeaderDefault />

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
  </div>
</template>

<style scoped>
#home {
  height: 100dvh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
}

main > img {
  flex-grow: 1;
}

#actions {
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.pseudo-button {
  margin: 5px;
  padding: 5px 30px;
}

footer {
  display: flex;
  flex-direction: row;
  justify-content: end;
  height: 10%;
}
</style>
