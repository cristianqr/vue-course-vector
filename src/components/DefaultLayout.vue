<template>
    <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/users">Usuarios</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "DefaultLayput"
    }
</script>

<style scoped>

</style>