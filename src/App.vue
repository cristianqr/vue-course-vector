<template>
    <div class="container">
        <template v-for="(item, index) in breadcrumbs">
            <span>{{item}}</span>
            <span class="arrow" v-if="(index + 1) < breadcrumbs.length">&raquo;</span>
        </template>
        <br><br>
        <button @click="newUser">Usuario nuevo</button>
        <UserList></UserList>
        <UserEdit v-if="isVisibleEditUser"></UserEdit>
        <UserNew @saveUser="saveUsers($event)" v-if="isVisibleNewUser"></UserNew>
    </div>
</template>

<script>
    import UserNew from './components/UserNew';
    import UserEdit from './components/UserEdit';
    import UserList from './components/UserList';
    import {sharedBus} from './core/sharedBus.js';
    import Axios from 'axios';

    export default {
        data(){
          return {
              isVisibleNewUser: false,
              isVisibleEditUser: false,
              toggleUser: false,
              breadcrumbs: []
          };
        },
        name: 'app',
        components: {
            UserNew,
            UserEdit,
            UserList
        },
        created() {
            sharedBus.$on('breadcrumbs:change', (data) => {
                this.breadcrumbs = data;
            });
        },
        methods: {
            newUser(){
                this.isVisibleNewUser = true;
            },
            saveUsers(newUser){
                console.log(newUser);
                return;
                Axios.post('http://localhost:3000/users', newUser).then(result => {
                    console.log(result.data);
                });
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
