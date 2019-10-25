<template>
    <div id="modal" class="modal fade" data-backdrop="false" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="modalHeader"></slot>
                    <button type="button" class="close" data-dismiss="modal" @click="clickmodal">×</button>
                </div>
                <div class="modal-body">
                    <slot name="modalBody"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'modalFiltering',
        methods:{
            clickmodal()
            {
                this.$emit('clickModal');
            }
        }
    }
</script>

<style scoped>

</style>