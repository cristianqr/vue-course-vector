<template>
    <div class="container">
        <AjaxLoader></AjaxLoader>
        <router-view></router-view>
    </div>
</template>

<script>
    import AjaxLoader from './core/ajax-loader';

    export default {
        components: {
            AjaxLoader
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
    .arrow{
        color: #f00;
        font-size: 16px;
        padding: 10px;
    }
</style>
