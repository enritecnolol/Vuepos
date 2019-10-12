<template>
    <div class="row">
        <div class="col-md-12">
            <div class="table-responsive">
                <table class="table table-bordered">
                    <tbody>
                    <tr>
                        <th><b>SubTotal</b></th>
                        <td>${{formatMoney(SubTotal)}}</td>
                        <td>{{ItemsQuantity}} items</td>
                    </tr>
                    <tr>
                        <th><b>Tax</b></th>
                        <td>$0.00</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th><b>Discount</b></th>
                        <td>0%</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th><b>Total</b></th>
                        <td>${{formatMoney(Total)}}</td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data()
        {
            return {

            }
        },
        methods:{
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
        },
        computed:{
            ItemsQuantity()
            {
                return this.$store.getters['cart/ItemsQuantity']
            },
            SubTotal()
            {
                return this.$store.getters['cart/SubTotal']
            },
            Total()
            {
                return this.$store.getters['cart/Total']
            },
        }
    }
</script>

<style scoped>

</style>