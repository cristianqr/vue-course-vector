<template>
    <div class="container">
        <template v-for="(item, index) in breadcrumbs">
            <span>{{item}}</span>
            <span class="arrow" v-if="(index + 1) < breadcrumbs.length">&raquo;</span>
        </template>
        <br><br>
        <button @click="newUser">Usuario nuevo</button>
        <UserList></UserList>
    </div>
</template>

<script>
    import UserNew from './components/UserNew';
    import UserList from './components/UserList';
    import {sharedBus} from './core/sharedBus.js';

    export default {
        data(){
          return {
              toggleUser: false,
              breadcrumbs: []
          };
        },
        name: 'app',
        components: {
            UserNew,
            UserList
        },
        created() {
            sharedBus.$on('breadcrumbs:change', (data) => {
                this.breadcrumbs = data;
            });
        },
        methods: {
            newUser(){
                this.toggleUser = !this.toggleUser;

                setTimeout(() => {
                    this.$refs.userNew.$refs.firstName.focus();
                }, 1000);

            }
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
