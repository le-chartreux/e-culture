<script setup lang="ts">
import UserInfoSmall from "@/components/UserInfoSmall.vue";
</script>

<template>
  <header>
    <UserInfoSmall/>
  </header>

  <main>
    <img src="/src/assets/logo/application.png" alt="application logo">
    <div id="create-or-join">
      <button>Create a game</button>
      <button>Join a game</button>
      <button>About Us</button>
    </div>
  </main>

  <footer>
    <img src="/src/assets/logo/company.png" alt="company logo">
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

#create-or-join {
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
