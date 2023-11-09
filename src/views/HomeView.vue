<script setup>
import { useRoute, useRouter } from 'vue-router'

const router = useRouter();
function showAbout() {
  router.push('/about')
}

</script>

<template>
  <main>
    <h1>This is my weblog project</h1>
    <br />
    <button @click="showAbout">Show about</button>
  </main>
</template>
