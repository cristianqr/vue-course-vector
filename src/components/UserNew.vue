<template>
    <form @submit.prevent="saveUser">
        <div class="form-group">
            <label>Nombres</label>
            <input type="text" class="form-control" v-model="user.firstName">
        </div>

        <h2>Genero</h2>
        <div class="form-group">
            <div class="form-check">
                <input type="radio" class="form-check-input" id="female" name="gender" value="F" v-model="user.gender">
                <label for="female" class="form-check-label">Femenino</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" id="male" name="gender" value="M" v-model="user.gender">
                <label for="male" class="form-check-label">Masculino</label>
            </div>
        </div>

        <div class="form-group">
            <select class="form-control" v-model="user.country">
                <option value="">-- Seleccione Pais --</option>
                <option :value="country" v-for="country in countryList">{{country}}</option>
            </select>
        </div>

        <h2>Cursos de interes</h2>
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

        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="allowSendMail" :true-value="1" :false-value="0" v-model="user.allowSendEmail">
            <label for="allowSendMail" class="form-check-label">Deseas recibir email?</label>
        </div>
        <br><br>

        <button class="btn btn-primary">Registrar</button>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                user: {
                    firstName: 'Cristian',
                    gender: 'M',
                    country: 'PERU',
                    allowSendEmail: 1,
                    courses: []
                },
                countryList: [
                    'PERU',
                    'ARGENTINA',
                    'COLOMBIA'
                ]
            }
        },
        methods: {
            saveUser(){
                console.log(this.user);
            }
        }
    }
</script>