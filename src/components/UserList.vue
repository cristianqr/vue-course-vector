<template>
    <div>
        <h1>Listado de Usuarios</h1>
        <br>

        <table class="table table-hover">
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
                    <button class="btn btn-success btn-sm" @click="$emit('editUser', user)">Editar</button>&nbsp;
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

    export default {
        components: {
            UserNew,
            UserEdit
        },
        props: {
            userList: Array
        },
        data() {
            return {};
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>