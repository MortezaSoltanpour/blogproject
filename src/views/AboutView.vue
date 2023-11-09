<script setup>

import { useRoute, useRouter } from 'vue-router'

const router = useRouter();
const route = useRoute();

console.log(route.params)
const id = route.params.id;
const name = route.params.name;
function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <br />
  id is : {{ id }} and name is : {{ name }}
  <br />
  <br />
  <button @click="goHome"> Go home</button>
</template>

<style></style>
