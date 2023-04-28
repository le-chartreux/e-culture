<script setup lang="ts">
import HeaderDefault from '@/components/HeaderDefault.vue'
</script>

<template>
  <HeaderDefault />
  <p>Game with ID {{ $route.params.id }} here</p>
</template>
