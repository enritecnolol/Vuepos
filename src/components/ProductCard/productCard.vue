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
               <b style="color: white">${{formatMoney(product.price)}}&nbsp;</b>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['product'],
        methods:{
            productSelect()
            {
                this.$store.dispatch('cart/addItem', this.product)
            },
            formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",")
            {
                try {
                    decimalCount = Math.abs(decimalCount);
                    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

                    const negativeSign = amount < 0 ? "-" : "";

                    let i = parseInt(
                        (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
                    ).toString();
                    let j = i.length > 3 ? i.length % 3 : 0;

                    return (
                        negativeSign +
                        (j ? i.substr(0, j) + thousands : "") +
                        i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
                        (decimalCount
                            ? decimal +
                            Math.abs(amount - i)
                                .toFixed(decimalCount)
                                .slice(2)
                            : "")
                    );
                } catch (e) {
                    console.log(e);
                }
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
    .card_product:hover{
        opacity: 0.8;
    }
</style>