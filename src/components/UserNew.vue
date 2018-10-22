<template>
    <form @submit.prevent="saveUser" novalidate>
            <div class="form-group">
                <label>Nombres</label>
                <input type="text" class="form-control" :class="{'border-danger': errors.firstName}" v-model="user.firstName" ref="firstName" vee-validate="'required'" name="firstName">
            </div>

            <div class="form-group">
                <label>Apellido Paterno</label>
                <input type="text" class="form-control" v-model="user.firstSurname">
            </div>

            <div class="form-group">
                <label>Apellido Materno</label>
                <input type="text" class="form-control" v-model="user.lastSurname">
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" v-model="user.email">
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
    import {sharedBus} from '../core/sharedBus.js';

    export default {
        data(){
            return {
                user: {
                    id: 1,
                    firstName: 'Cristian',
                    firstSurname: 'Quispe',
                    lastSurname: 'Ramirez',
                    email: 'cristianqr@outlook.com',
                    gender: 'M',
                    country: 'Peru',
                    courses: ['Angular', 'Vue', 'React']
                },
                countryList: [
                    'PERU',
                    'ARGENTINA',
                    'COLOMBIA'
                ],
                errors: {}
            }
        },
        mounted(){
            sharedBus.$emit('breadcrumbs:change', ['Usuarios', 'Nuevo']);
        },
        methods: {
            saveUser() {
                this.errors = {};

                if (!this.user.firstName) {
                    this.errors.firstName = true;
                }

                if (!this.user.firstSurname) {
                    this.errors.firstSurname = true;
                }

                if (!this.user.lastSurname) {
                    this.errors.lastSurname = true;
                }

                if (!this.user.email) {
                    this.errors.email = true;
                }

                if (!this.user.gender) {
                    this.errors.gender = true;
                }

                if (!this.user.country) {
                    this.errors.country = true;
                }

                const errorCounts = Object.keys(this.errors).length;

                if (errorCounts >= 1) {
                    return;
                }

                alert('Exito!!');
            }
        }
    }
</script>