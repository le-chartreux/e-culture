<script setup lang="ts">
import UserInfoSmall from '@/components/Header/UserInfoSmall.vue'
</script>

<template>
  <header>
    <router-link to="/"
      ><img src="/src/assets/logo/application-without-text.png" alt="application logo"
    /></router-link>
    <UserInfoSmall />
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10%;
}

header * {
  height: 7dvh;
}
</style>
