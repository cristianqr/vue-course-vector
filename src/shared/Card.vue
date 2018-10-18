<template>
    <div class="card">
        <h3 class="card-header">
            <slot name="header"></slot>
        </h3>
        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>

</style>