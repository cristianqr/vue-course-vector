<template>
    <form @submit.prevent="updateUser" novalidate>
            <div class="form-group">
                <label>Nombres</label>
                <input type="text" class="form-control" v-model="user.firstName" ref="firstName" v-validate="'required|min:5|max:10'" name="firstName">
                <div class="invalid-feedback">
                    {{errors.first('firstName')}}
                </div>
            </div>

            <div class="form-group">
                <label>Apellido Paterno</label>
                <input type="text" class="form-control" v-model="user.firstSurname" name="firstSurname" v-validate="{required: true, min: 5}">
            </div>

            <div class="form-group">
                <label>Apellido Materno</label>
                <input type="text" class="form-control" v-model="user.lastSurname">
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" v-model="user.email" name="email" v-validate="{required: true, email: true}">
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

            <button type="submit" class="btn btn-primary">Actualizar</button>
    </form>
</template>

<script>
    import {sharedBus} from '../core/sharedBus.js';

    export default {
        data(){
            return {
                user: {},
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
        methods: {
            updateUser() {
                this.$validator.validateAll().then(result => {
                    if(!result) {
                        return;
                    }
                    alert('Update!!');
                });
            }
        }
    }
</script>