<template>
    <h1>user info</h1>
    <h2> User id is : {{ id }}</h2>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute();
const id = route.params.id;

</script>

<style></style>