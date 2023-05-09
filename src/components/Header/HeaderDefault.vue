<script lang="ts">
import UserInfoSmall from '@/components/Header/UserInfoSmall.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { UserInfoSmall }
})
</script>

<template>
  <header>
    <router-link to="/"
      ><img src="/logo/application-without-text.png" alt="application logo"
    /></router-link>
    <UserInfoSmall />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  height: 10%;
  flex-flow: wrap row;
}

header * {
  height: 7dvh;
}
</style>
