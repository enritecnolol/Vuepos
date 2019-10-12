<template>
    <tr>
        <td><b>{{data.name}}</b></td>
        <td>${{formatMoney(data.price)}}</td>
        <td>
            <div class="row">
                <div class="col" @click="increaseItem"><i class="icon-plus-circle2" style="font-size: 22px;margin-top: 5px;"></i></div>
                <div class="col"><b style="font-size: 20px;">{{data.quantity}}</b></div>
                <div class="col" @click="decreaseItem"><i class="icon-minus-circle2" style="font-size: 22px;margin-top: 5px;"></i></div>

            </div>
        </td>
        <td>${{formatMoney(data.total)}}</td>
    </tr>
</template>

<script>
    export default {
        props:['data'],
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
            decreaseItem()
            {
                this.$store.dispatch('cart/removeItem', this.data.id)
            },
            increaseItem()
            {
                this.$store.dispatch('cart/addItem', {id:this.data.id})
            }
        }
    }
</script>

<style scoped>

</style>