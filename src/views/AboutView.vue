<script lang="ts">
import HeaderDefault from '@/components/Header/HeaderDefault.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { HeaderDefault }
})
</script>

<template>
  <div id="about">
    <HeaderDefault />

    <main>
      <img src="/logo/application.png" alt="application logo" />
      <h1>About e-culture</h1>
      <p>E-culture is an educational multiplayer website hosting games meant to help people to learn English in a fun and dynamic way. 
      
      It is designed for anyone who is eager to learn more about the English language and culture. While it does not require an excellent proficiency in English, players do need to understand the questions in order to play correctly. 
      
      The current version of e-culture allows players to create or join a Game Room, as well as test each other’s knowledge with questions.</p>
    </main>

    <footer>
      <img src="/logo/company.png" alt="company logo" />
    </footer>
  </div>
  
</template>

<style scoped>
#about {
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
footer {
  display: flex;
  flex-direction: row;
  justify-content: end;
  height: 10%;
}
</style>
