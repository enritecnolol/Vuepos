<template>
    <div class="card card-body" @click="productSelect">
        <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
            <div class="mr-lg-3 mb-1 mb-lg-0">
                <img :src="product.img" width="100" alt="">
            </div>

            <div class="media-body">
                <h6 class="media-title font-weight-semibold">
                    <a href="#">{{product.name}}</a>
                </h6>
            </div>
            ​
            <div class="mt-1 mt-lg-0 ml-lg-3 text-center">
                <h3 class="mb-0 font-weight-semibold">${{formatMoney(product.price)}}</h3>​
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
        }
    }
</script>

<style scoped>

</style>