<template>
    <div class="container">
        <div class="row justify-content-center mt-2">
            <app-card>
                    <template slot="header">Iniciar Sesión</template>
                    <div class="form-group">
                        <label>Usuario</label>
                        <input type="text" class="form-control" v-model="user.username">
                    </div>

                    <div class="form-group">
                        <label>Contraseña</label>
                        <input type="password" class="form-control" v-model="user.password">
                    </div>
                    <button class="btn btn-primary btn-block" @click="login">Login</button>
            </app-card>
        </div>
    </div>
</template>

<script>
    import {httpClient} from "../core/http-client";

    export default {
        data() {
            return {
                user: {
                    username: '',
                    password: ''
                }
            }
        },
        beforeCreate() {
            localStorage.removeItem('auth');
        },
        methods: {
            login() {
                httpClient.get('/users').then((res) => {
                    let valid = false;
                    res.data.forEach(item => {
                        if(item.username === this.user.username && item.password === this.user.password) {
                            valid = true;
                        }
                    });

                    if (valid) {
                        localStorage.setItem('auth', '1');
                        this.$router.push('/home');
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>