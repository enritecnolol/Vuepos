<template>
    <div class="card" style="height: 100%">
        <div class="card-header">
            <slot name="card-header"></slot>
        </div>
        <div class="card-body">
            <div class="text-center" v-if="loading" style="margin-top: 50px">
                <i class="icon-spinner2 spinner" style="font-size: 60px"></i>
            </div>
            <slot name="card-body" v-if="!loading"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            loading:{
                type:Boolean
            }
        }
    }
</script>

<style scoped>

</style>