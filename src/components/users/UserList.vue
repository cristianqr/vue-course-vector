<template>
    <div>
        <h1>Listado de Usuarios</h1>
        <br>
         <button @click="newUser" class="btn btn-primary">Nuevo</button>
        <table class="table table-hove mt-2">
            <thead>
            <tr>
                <th>Nro.</th>
                <th>Apellidos y Nombres</th>
                <th>Email</th>
                <th>Genero</th>
                <th>País</th>
                <th>Interes</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user, index) in userList" :key="index">
                <th>{{index + 1}}</th>
                <th>{{user | appFullName('-') | appMaxLength('***', 50)}}</th>
                <th>{{user.email}}</th>
                <th>{{user.gender}}</th>
                <th>{{user.country}}</th>
                <th>{{user.courses | appJoinCourses("-")}}</th>
                <th>
                    <router-link :to="'/users/edit/' + user.id" class="btn btn-success">Editar</router-link>&nbsp;
                    <button class="btn btn-danger btn-sm" @click="$emit('removeUser', user)">Eliminar</button>
                </th>
            </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
    import UserNew from './UserNew';
    import UserEdit from './UserEdit';
    import {httpClient} from "../../core/http-client";

    export default {
        components: {
            UserNew,
            UserEdit
        },
        mounted() {
            httpClient.get('/users').then(users => {
                this.userList = users.data;
            });
        },
        data() {
            return {
                userList: []
            };
        },
        methods: {
            newUser() {
                this.$router.push('/users/new');
            }
        }
    }
</script>

<style scoped>

</style>