<template>
    <card style="box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px 2px;" >
        <template v-slot:card-header>
            <div class="row">
                <div class="col-4"><i class="icon-info22" style="font-size: 22px"></i> <b style="font-size: 18px"> Note</b></div>
                <div class="col-8"><b style="font-size: 16px">{{ data.dateTime }}</b></div>
            </div>
            <div class="row" style="margin-top: 50px">
                <div class="col-md-12">
                    {{ data.description }}
                </div>
                <div class="col-md-12">
                    <hr>
                </div>
            </div>
        </template>
        <template v-slot:card-body>
            <div class="row">
                <div class="col-md-12">
                    <b style="font-size: 16px">Detalles de los productos:</b>
                </div>
                <div class="col-md-12">
                    <div class="row" style="margin-top: 10px" v-for="(product, index) in data.cart" :key="index">
                        <div class="detail_name col">{{product.name}}</div>
                        <div class="detail_price col"> ${{parseFloat(product.price).formatMoney(2)}} </div>
                        <div class="detail_quantity col"> X{{product.quantity}}  </div>
                        <div class="detail_total col"> ${{parseFloat(product.total).formatMoney(2)}}  </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <hr>
                </div>
                <div class="col-md-12" style="margin-top: 10px">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="text-center">
                                <button type="button" class="btn btn-success" @click="passToCart"><i class="icon-cart-add"></i> Añadir al carrito</button>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="text-center">
                                <button type="button" class="btn btn-danger " @click="removeHoldSale" style="margin-left: 5px"><i class="icon-cart-remove"></i> Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </card>
</template>

<script>
    import card from "../card";
    import { mapState } from 'vuex'
    import bootbox from 'bootbox'

    export default {
        components:{
            card
        },
        props:['data', 'index'],
        methods:{
            passToCart()
            {
                if(this.CartItems.length != 0)
                {
                    bootbox.confirm({
                        title: 'Ventas en espera',
                        message: 'Desea usted mover los productos del carrito hacia la lista de espera?',
                        buttons: {
                            confirm: {
                                label: 'SI',
                                className: 'btn-primary'
                            },
                            cancel: {
                                label: 'NO',
                                className: 'btn-link'
                            }
                        },
                        callback: (result) => {
                            this.$store.dispatch('cart/passToCart',
                                {
                                    index:this.index,
                                    cartItem:this.data,
                                    currentCartItemsMoveToHoldSale:result
                                })
                                .then(()=> {
                                    this.$router.push("/");
                                })
                        }
                    });
                    return;
                }
                this.$store.dispatch('cart/passToCart',
                    {
                        index:this.index,
                        cartItem:this.data
                    })
                    .then(()=> {
                        this.$router.push("/");
                    })

            },
            removeHoldSale()
            {

                this.$store.dispatch('cart/removeHoldSale',
                    {
                        index:this.index,
                        cartItem:this.data
                    })
            }
        },
        computed:{
            ...mapState({
                CartItems: state => state.cart.cartItems,
            }),
        }
    }
</script>

<style scoped>

</style>