<template>
    <div>
        <button v-on:click="greeting('Peru')">Saludar</button>
        <br><br>
        <a href="#" @click.prevent="setName">Mi nombre es: {{name}}</a><br>
        <input type="text" @keyup.13="enterEvent">
    </div>
</template>
<script>
    export default {
        data(){
            return {
                name: ''
            }
        },
        methods: {
            greeting(name){
                alert(name);
            },
            setName() {
                this.name = 'Peru';
            },
            enterEvent(){
                alert('Se presiono enter');
            }
        }
    }
</script>