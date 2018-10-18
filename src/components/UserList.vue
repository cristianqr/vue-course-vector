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

        <table border="1" width="100%">
            <thead>
                <th>Nro.</th>
                <th>Nombres</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>Age</th>
                <th width="0%">Accion</th>
            </thead>
            <tbody>
                <template v-for="(user, index) in userList">
                    <tr>
                        <td>{{index}}</td>
                        <td>{{user.firstName}}</td>
                        <td>{{user.firstSurname}}</td>
                        <td>{{user.lastSurname}}</td>
                        <td>{{user.age}}</td>
                        <td><button class="btn btn-primary btn-sm">Editar</button></td>
                    </tr>
                </template>
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
                        firstName: 'Cristian',
                        firstSurname: 'Quispe',
                        lastSurname: 'Ramirez',
                        age: 30
                    },
                    {
                        firstName: 'Melina',
                        firstSurname: 'Pernia',
                        lastSurname: 'Pernia',
                        age: 30
                    },
                    {
                        firstName: 'Laura',
                        firstSurname: 'Ramos',
                        lastSurname: 'Ramirez',
                        age: 30
                    },
                    {
                        firstName: 'Katherine',
                        firstSurname: 'Perales',
                        lastSurname: 'Iglesias',
                        age: 30
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
            fetch('dfjkdjfdjkf').then(res => res.json()).then(res => {
                this.user = res;
            });
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