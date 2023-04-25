<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    userName: String
  }
})
</script>

<template>
  <p v-if="userName">{{ userName }}</p>
  <p v-else>User name not set</p>
</template>
