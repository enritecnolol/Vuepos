<template>
    <div class="card_product" style="" @click="productSelect">
        <img :src="product.img" class="card_img" alt="">
        <div class="card_name" style="">
           <div class="text-center">
               <b style="color: white">{{toLowerCase(product.name)}}</b>
           </div>
        </div>
        <div class="card_price" style="">
           <div class="pull-right">
               <b style="color: white">${{parseFloat(product.price).formatMoney(2)}}&nbsp;</b>
           </div>
        </div>
        <div class="card_count" style="" v-if="Mobile">
           <div class="pull-right">
               <b style="color: white">&nbsp;{{MobileItemCount}}&nbsp;</b>
           </div>
        </div>
    </div>
</template>

<script>
    import { isMobile, isTablet } from 'mobile-device-detect';
    export default {
        props:['product'],
        computed:{
            MobileItemCount(){
                var found = this.$store.state.cart.cartItems.find(e => e.id === this.product.id);
                if(found)
                {
                    return found.quantity;
                }

                return 0;
            },
            Mobile()
            {
                return isMobile;
            },
        },
        methods:{
            productSelect()
            {
                this.$store.dispatch('cart/addItem', this.product)
            },
            toLowerCase(str)
            {
                return str.toLowerCase();
            }
        }
    }
</script>

<style>
    .card_product{
        cursor: pointer;
        width: 120px;
        height: 120px;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.64);
        border-radius: 10px 10px 10px 10px;
    }
    .card_img{
        width: 120px;
        height: 120px;
        border-radius: 10px 10px 10px 10px;
    }
    .card_name {
        z-index: 4;
        background-color: rgba(0, 0, 0, 0.63);
        position:absolute;
        bottom: 0px;
        width: 120px;
        border-radius: 0px 0px 10px 10px;
    }
    .card_price {
        z-index: 4;
        background-color: rgba(0, 0, 0, 0.51);
        position:absolute;
        bottom: 100px;
        border-radius: 10px 0px 10px 0px;
    }
    .card_count{
        z-index: 4;
        background-color: rgba(0, 0, 0, 0.51);
        position:absolute;
        bottom: 101px;
        left: 116px;
        border-radius: 0px 10px 0px 10px;
    }
    .card_product:hover{
        opacity: 0.8;
    }
</style>