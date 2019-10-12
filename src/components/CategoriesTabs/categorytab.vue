<template>
    <span class="categories"
          :class="categorySelected.id == category.id ? 'selectedGat' : ''"
    @click="changeCategorySelected">{{category.name}}</span>
</template>

<script>
    export default {
        props:{
            category:{
                type:Object
            },
            categorySelected:{
                type:Object | String
            }
        },
        methods:{
            changeCategorySelected()
            {
                this.$emit('changeCategorySelected', this.category);
            }
        }
    }
</script>

<style scoped>

</style>