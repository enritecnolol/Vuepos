<template>
    <div class="form-group form-group-feedback form-group-feedback-left">
        <input type="text" class="form-control form-control-lg" autofocus @keypress.enter="searchItem" placeholder="Barcode or Product" v-model="search">
        <div class="form-control-feedback form-control-feedback-lg">
            <i class="icon-barcode2"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data()
        {
            return {
                search:''
            }
        },
        methods:{
            searchItem()
            {
                this.$store.dispatch('products/getsearchProduct', this.search)
                    .then(res => {
                        if(res.length == 0)
                        {
                            this.$notify({
                                group: 'foo',
                                title: 'Buscada',
                                text: 'No exite producto con este codigo o nombre',
                                type: 'warn ',
                            });
                            return
                        }else if(res.length == 1)
                        {
                            this.$store.dispatch('categories/changeCategorySelected','');
                            this.$store.dispatch('cart/addItem', res[0])
                        }else{
                            this.$store.dispatch('categories/changeCategorySelected','');
                            this.$store.dispatch('products/putProducts', res)
                        }

                        this.search = '';
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>

<style scoped>

</style>