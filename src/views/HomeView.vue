<script lang="ts">
import HeaderDefault from '@/components/Header/HeaderDefault.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { HeaderDefault }
})
</script>

<template>
  <div id="home">
    <HeaderDefault />

    <main>
      <img src="/logo/application.png" alt="application logo" />
      <div id="actions">
        <router-link class="pseudo-button doodle-border" to="/create-game-room"
          >Create a Game Room</router-link
        >
        <router-link class="pseudo-button doodle-border" to="/join-game-room"
          >Join a Game Room</router-link
        >
        <router-link class="pseudo-button doodle-border" to="/about">About Us</router-link>
      </div>
    </main>

    <footer>
      <img src="/logo/company.png" alt="company logo" />
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
  justify-content: space-evenly;
}

main > img {
  border: none;
}

#actions {
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

footer {
  display: flex;
  flex-direction: row;
  justify-content: end;
  height: 10%;
}
</style>
