<template>
    <div class="row">
        <div class="col-md-12">
            <card>
                <template v-slot:card-body>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12" style="min-height: 390px;">
                                <div class="text-center" v-if="holdCart.length == 0">
                                    <i class="icon-info22" style="font-size: 50px;color: orange"></i> <b style="font-size: 30px"> No hay datos guardados</b>
                                </div>
                                <div class="row">
                                    <div class="col-md-4" v-for="(item, index) in holdCart" :key="index" style="margin-top: 15px">
                                        <HoldSaleCard :data="item" :index="index"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </card>
        </div>
    </div>
</template>

<script>
    import card from "../components/card";
    import HoldSaleCard from "../components/card/HoldSaleCard";
    export default {
        components:{
            card,
            HoldSaleCard
        },
        computed:{
            holdCart()
            {
                return this.$store.state.cart.holdCart;
            }
        }
    }
</script>

<style>
    .detail_name{

    }
    .detail_price{

    }
    .detail_quantity{

    }
    .detail_total{

    }
</style>