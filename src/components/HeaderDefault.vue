<script setup lang="ts">
import UserInfoSmall from "@/components/UserInfoSmall.vue";
</script>

<template>
  <header>
    <router-link to="/"><img src="/src/assets/logo/application.png" alt="application logo" /></router-link>
    <UserInfoSmall />
  </header>
</template>

<style scoped>
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 10dvh;
}

header * {
    height: 10dvh;
}

</style>