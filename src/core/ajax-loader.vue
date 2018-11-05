<template>
    <div class="ajax-loader" v-if="isVisible">
        <div class="loading">Cargando...</div>
    </div>
</template>

<script>
    import {sharedBus} from '../core/sharedBus.js';
    export default {
        data(){
            return {
                counter: 0
            }
        },
        computed: {
            isVisible(){
                return this.counter > 0;
            }
        },
        created(){
            sharedBus.$on('ajax-loader:show', () => {
                this.counter++;
            });

            sharedBus.$on('ajax-loader:hide', () => {
                this.counter--;
            });
        },
    }
</script>

<style scoped>
    .ajax-loader{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-color: #000;
        opacity: .75;
    }
    .loading{
        width: 50px;
        margin: 50px auto;
    }
</style>