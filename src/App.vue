<script setup lang="ts">
import UserInfoSmall from "@/components/UserInfoSmall.vue";
</script>

<template>
  <header>
    <UserInfoSmall/>
  </header>

  <main>
    <img src="/src/assets/logo/application.png" alt="application logo">
    <button>Create a game</button>
    <button>Join a game</button>
  </main>

  <footer>
    <img src="/src/assets/logo/company.png" alt="company logo">
  </footer>
</template>

<style scoped>
header {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: end;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

footer {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: end;
}

</style>
