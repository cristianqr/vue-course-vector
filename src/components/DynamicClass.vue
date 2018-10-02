<template>
    <div>
        <button @click="changeResult" class="btn btn-primary">Enviar</button>
        <div :class="{'alert-success': exito, 'alert-danger': !exito}">
            <div>{{message}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                exito: false
            }
        },
        computed: {
            message(){
                if(this.exito) {
                    return 'se registro correctamente';
                }else {
                    return 'Error al Registrar';
                }
            }
        },
        methods: {
            changeResult(){
                this.exito = !this.exito;
            }
        }
    }
</script>

<style scoped>

</style>