<template>
    <div class="container">
        <template v-for="(item, index) in breadcrumbs">
            <span>{{item}}</span>
            <span class="arrow" v-if="(index + 1) < breadcrumbs.length">&raquo;</span>
        </template>
        <br><br>
        <button @click="newUser" class="btn btn-primary">Usuario nuevo</button>

        <UserList
                :userList="userList"
                @editUser="editUser($event)"
                @removeUser="removeUser($event)">
        </UserList>

        <UserNew
                @saveUser="saveUsers($event)"
                v-if="isVisibleNewUser">
        </UserNew>

        <UserEdit
                :user="currentUser"
                @updateUser="updateUser"
                v-if="isVisibleEditUser">
        </UserEdit>
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
              breadcrumbs: [],
              currentUser: {},
              userList: []
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

            Axios.get('http://localhost:3000/users').then(users => {
                this.userList = users.data;
            });
        },
        methods: {
            newUser(){
                this.isVisibleNewUser = true;
            },
            editUser(editUser){
                this.isVisibleEditUser = true;
                this.currentUser = {...editUser};
            },
            saveUsers(newUser){
                Axios.post('http://localhost:3000/users', newUser).then(result => {
                    console.log(result.data);
                });
            },
            updateUser(){
                Axios.put(`http://localhost:3000/users/${this.currentUser.id}`, this.currentUser).then(result => {
                    this.userList = this.userList.map(item => {
                        if(item.id === this.currentUser.id) {
                            return this.currentUser;
                        }else {
                            return item;
                        }
                    });

                    this.isVisibleEditUser = false;
                });
            },
            removeUser(deleteUser){
                Axios.delete(`http://localhost:3000/users/${deleteUser.id}`).then(result => {
                    this.userList = this.userList.filter(item => item.id !== deleteUser.id);
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
