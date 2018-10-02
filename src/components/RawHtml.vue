<template>
    <div>

        <textarea
                :value="comment"
                @input="changeComment"
                class="form-control" rows="5">

        </textarea>
        <br>
        <button @click="format">Formatear</button>
        <div v-html="formatedComment">

        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                comment: '<h1>Hola Vector</h1>',
                formatedComment: ''
            }
        },
        methods: {
            changeComment(e){
                this.comment = e.target.value;
            },
            format(){
                this.formatedComment = this.comment;
            }
        }
    }
</script>

<style scoped>

</style>