<template>
    <div>
        <div class="form-group">
            <label for="">Nombres</label>
            <input type="text" class="form-control" :value="user.firstName">
        </div>

        <div class="form-group">
            <label for="">Apellido Paterno</label>
            <input type="text" class="form-control" :value="user.firstName">
        </div>

        <div class="form-group">
            <label for="">Apellido Materno</label>
            <input type="text" class="form-control" :value="user.lastSurname">
        </div>

        <div class="form-group">
            <label for="">Edad</label>
            <input type="text" class="form-control" :value="user.age">
        </div>

        <button  class="btn btn-primary" @click="register">Registrar</button>
    </div>
</template>

<script>
    export default {
        props: {
            user: Object
        },
        methods: {
            register(){
                this.$emit('register');
            }
        }
    }
</script>

<style scoped>

</style>