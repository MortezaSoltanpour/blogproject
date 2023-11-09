<template>
    <h1>user index </h1>
    <router-link style="margin-right:20px" :to="`/users/${this.id}`"> Show user one</router-link>
    <router-link to="/users/create"> Create new user</router-link>

    <br>
    <hr>
    <br>
    <router-view></router-view>
</template>

<script>
export default {
    data() {
        return {
            id: 1
        }
    }
}
</script>

<style></style>