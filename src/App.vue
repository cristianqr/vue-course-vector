<template>
    <div class="container">
        <UserNew></UserNew>
    </div>
</template>

<script>
    import UserNew from './components/UserNew';

    export default {
        name: 'app',
        components: {
            UserNew
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
