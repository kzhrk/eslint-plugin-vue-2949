<script setup lang="ts">
const html = "<h1>test</h1>";
</script>

<template>
  <div v-html="$sanitize(html)" />
</template>