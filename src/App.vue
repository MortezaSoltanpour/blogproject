<script setup>
</script>

<template>
  <div>
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/about">About us</router-link>
    <router-link class="link" to="/users">Users</router-link>
  </div>
  <hr />

  <!-- Page source comes here START -->
  <router-view></router-view>
  <!-- Page source comes here END -->
</template>

<style scoped>
.link {
  margin-right: 10px;
}
</style>
