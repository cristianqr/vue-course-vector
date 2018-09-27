<template>
    <div>
        <div>Nota1: {{note1}}</div>
        <div>Nota2: {{note2}}</div>
        <div>Nota3: {{note3}}</div>
        <div>Promedio: {{average}}</div>
        <div>Promedio: {{average}}</div>
        <div>Promedio: {{average}}</div>
        <div>Promedio: {{average}}</div>
        <div>Promedio: {{average}}</div>
        <div>Promedio: {{average}}</div>
        <div>Promedio: {{average}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                note1: 15,
                note2: 20,
                note3: 12,
            };
        },
        computed: {
            average(){
                return (this.note1 + this.note2 + this.note3) / 3;
            }
        }
    }
</script>