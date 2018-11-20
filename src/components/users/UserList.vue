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
            <tfoot>
            <tr>
                <td colspan="7">Total damas: {{totalWoman}}</td>
            </tr>
            <tr>
                <td colspan="7">Total caballeros: {{totalMen}}</td>
            </tr>
            </tfoot>
        </table>

    </div>
</template>

<script>
    import UserNew from './UserNew';
    import UserEdit from './UserEdit';
    import {store} from "../../store/store";
    import {mapGetters} from 'vuex';

    export default {
        components: {
            UserNew,
            UserEdit
        },
        mounted() {
            store.dispatch('user/loadUsers');
        },
        computed: {
            ...mapGetters('user', ['totalWoman', 'totalMen']),
            userList() {
                return store.state.user.users;
            }
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