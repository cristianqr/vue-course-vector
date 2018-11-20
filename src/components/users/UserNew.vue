<template>
    <form @submit.prevent="saveUser" novalidate>
            <div class="form-group">
                <label>Nombres</label>
                <input type="text" class="form-control" :class="{'is-invalid': errores.firstName, 'is-valid': !errores.firstName}" v-model="user.firstName" ref="firstName">
                <div class="invalid-feedback">
                    El campo nombre es requerido
                </div>
            </div>

            <div class="form-group">
                <label>Apellido Paterno</label>
                <input type="text" class="form-control" :class="{'is-invalid': errores.firstSurname, 'is-valid': !errores.firstSurname}" v-model="user.firstSurname">
            </div>

            <div class="form-group">
                <label>Apellido Materno</label>
                <input type="text" class="form-control" :class="{'is-invalid': errores.lastSurname, 'is-valid': !errores.lastSurname}" v-model="user.lastSurname">
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" v-model="user.email" :class="{'is-invalid': errores.email, 'is-valid': !errores.email}">
            </div>

            <h4>Genero</h4>
            <div class="form-group">
                <div class="form-check">
                    <input type="radio" class="form-check-input" name="gender" id="male" value="M"
                           v-model="user.gender">
                    <label for="male" class="form-check-label">Masculino</label>
                </div>

                <div class="form-check">
                    <input type="radio" class="form-check-input" name="gender" id="female" value="F"
                           v-model="user.gender">
                    <label for="female" class="form-check-label">Femenino</label>
                </div>
            </div>

            <div class="form-group">
                <label>País</label>
                <select class="form-control" v-model="user.country">
                    <option value="">--Seleccione--</option>
                    <option v-for="(item, key) in countryList" :value="item" :key="key" ref="countryList">{{item}}</option>
                </select>
            </div>

            <h4>Cursos de Interés</h4>
            <div class="form-group">
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" id="angular" value="Angular" v-model="user.courses">
                    <label for="angular" class="form-check-label">Angular</label>
                </div>

                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" id="vue" value="Vue" v-model="user.courses">
                    <label for="vue" class="form-check-label">Vue</label>
                </div>

                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" id="react" value="React" v-model="user.courses">
                    <label for="react" class="form-check-label">React</label>
                </div>
            </div>

            <div class="form-group">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="chkAllowEmails" :checked="user.allowEmails">
                    <label for="chkAllowEmails" class="form-check-label">Desea recibir emails?</label>
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Registrar</button>
    </form>
</template>

<script>
    import {sharedBus} from '../../core/sharedBus.js';
    import {store} from "../../store/store";

    export default {
        data(){
            return {
                user: {
                    "courses": [
                        "React"
                    ],
                    "firstName": "bbbbbb",
                    "firstSurname": "bbbbb",
                    "lastSurname": "bbbbbb",
                    "email": "bbbbb@jkjfkdjf.com",
                    "gender": "M",
                    "country": "ARGENTINA",
                    "username": "aaaa",
                    "password": "123"
                },
                countryList: [
                    'PERU',
                    'ARGENTINA',
                    'COLOMBIA'
                ]
            }
        },
        mounted(){
            sharedBus.$emit('breadcrumbs:change', ['Usuarios', 'Nuevo']);
        },
        computed: {
            errores(){
                const errores = {};

                if (!this.user.firstName) {
                    errores.firstName = true;
                }

                if (!this.user.firstSurname) {
                    errores.firstSurname = true;
                }

                if (!this.user.lastSurname) {
                    errores.lastSurname = true;
                }

                if (!this.user.email) {
                    errores.email = true;
                }else if(!this.isValidEmail(this.user.email)){
                    errores.email = true;
                }

                if (!this.user.gender) {
                    errores.gender = true;
                }

                if (!this.user.country) {
                    errores.country = true;
                }

                return errores;
            }
        },
        methods: {
            saveUser() {
                const errorCounts = Object.keys(this.errores).length;

                if (errorCounts >= 1) {
                    return;
                }

                store.dispatch('user/saveUser', this.user).then(() => {
                    this.$router.push('/users');
                })
            },
            isValidEmail(email) {
                const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return regEx.test(email);
            }
        }
    }
</script>