<template>
    <div class="space">
        <div class="box" :style="box" v-for="(box, index) in boxes" :key="index">Caja {{index}}</div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                box1: {
                    width: '100px',
                    height: '100px',
                    top: '100px',
                    left: '100px',
                },
                boxes: [
                    {
                        width: '100px',
                        height: '100px',
                        top: '100px',
                        left: '100px',
                    },
                    {
                        width: '200px',
                        height: '300px',
                        top: '210px',
                        left: '100px',
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .space{
        position: relative;
        background-color: #090;
    }
    .box{
        position: absolute;
        background-color: #f00;
    }
</style>