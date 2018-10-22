<template>
    <div>
        <h1>Listado de Usuarios</h1>
        <button @click="newUser" class="btn btn-primary">Nuevo</button>
        <br><br>

        <app-card>
            <template slot="header">Busqueda de Usuario</template>
            <div class="form-group">
                <label>Nombres</label>
                <input type="text" class="form-control" v-app-set-focus="'Hola'">
            </div>
        </app-card>

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
                <th>{{user | appFullName('-') | appMaxLength('***', 10)}}</th>
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
        <br><br>

        <UserNew :user="user2"
                 @register="registerUser" v-if="toggleUserNew">

        </UserNew>

        <div class="alert alert-info" v-else>
            Hacer click en el boton Nuevo para crear un usuario
        </div>

    </div>
</template>

<script>
    import UserNew from './UserNew';

    export default {
        components: {
            UserNew
        },
        data() {
            return {
                userList: [
                    {
                        id: 1,
                        firstName: 'Cristian',
                        firstSurname: 'Quispe',
                        lastSurname: 'Ramirez',
                        email: 'cristianqr@outlook.com',
                        gender: 'M',
                        country: 'Peru',
                        courses: ['Angular', 'Vue', 'React']
                    },
                    {
                        id: 2,
                        firstName: 'Carmen',
                        firstSurname: 'Fernandez',
                        lastSurname: 'Chavez',
                        email: 'cfernadez@gmail.com',
                        gender: 'F',
                        country: 'Brazil',
                        courses: []
                    },
                    {
                        id: 3,
                        firstName: 'Cesia',
                        firstSurname: 'Benites',
                        lastSurname: 'Rosales',
                        email: 'cbenites@outlook.com',
                        gender: 'F',
                        country: 'Colombia',
                        courses: ['Angular']
                    },
                    {
                        id: 4,
                        firstName: 'Rigo',
                        firstSurname: 'Paredes',
                        lastSurname: 'Arcos',
                        email: 'rparedes@gmail.com',
                        gender: 'M',
                        country: 'Ecuador',
                        courses: ['Vue', 'React']
                    },
                    {
                        id: 5,
                        firstName: 'Marco',
                        firstSurname: 'Montenegro',
                        lastSurname: 'Ruiz',
                        email: 'rmontenegro@outlook.com',
                        gender: 'M',
                        country: 'Peru',
                        courses: ['React']
                    }
                ],
                user2: {
                    firstName: 'Cristian',
                    firstSurname: 'Quispeeeeeeeeeee',
                    lastSurname: 'Ramirez',
                    age: 30
                },
                toggleUserNew: false
            };
        },
        created() {

        },
        methods: {
            registerUser() {
                this.toggleUserNew = false;
            },
            newUser(){
                this.toggleUserNew = true;
            }
        }
    }
</script>

<style scoped>

</style>