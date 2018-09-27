<template>
    <div>
        Mi nombre es: {{name}}
        <input type="text">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'Vector',
                productList: []
            };
        },
        beforeCreate() {
            console.log('beforeCreate', this.name);
        },
        created() {
            console.log('created', this.name);
        },
        beforeMount(){
            console.log('beforeMount', this.$el);
        },
        mounted(){
            this.$el.innerHTML = 'Nuevo contenido';
            console.log('mounted', this.$el);
        }
    }
</script>