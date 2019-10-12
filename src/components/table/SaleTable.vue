<template>
    <div class="table-responsive" style="height: 313px;margin-bottom: 10px">
        <table class="table table-sm">
            <thead>
            <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>
                    <div class="text-center">
                        Cantidad
                    </div>
                </th>
                <th>Total</th>
            </tr>
            </thead>
            <tbody>
            <SaleTableItems v-for="(data, index) in CartItems" :key="index" :data="data"/>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import SaleTableItems from "./Items/SaleTableItems";
    export default {
        components:{
            SaleTableItems
        },
        computed:{
            ...mapState({
                CartItems: state => state.cart.cartItems,
            })
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>