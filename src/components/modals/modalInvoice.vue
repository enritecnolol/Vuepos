<template>
    <modal>
        <template v-slot:modalHeader>

        </template>
        <template v-slot:modalBody>
            <div class="row">
                <div class="col-md-12" style="margin-bottom: 10px">
                    <div class="row">
                        <div class="col-md-1">
                            <i class="icon-user-minus" style="font-size: 40px"></i>
                        </div>
                        <div class="col-md-5">
                            <h4>Cliente no relacionado</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-12">
                            <h3>Precio a pagar:  <b style="color: green;float:right;font-size: 28px">$ {{ parseFloat(Total).formatMoney(2)}}</b></h3>
                        </div>
                        <div class="col-md-12">
                            <h3>Entregado:  <b style="color: green;float:right;font-size: 28px">$ {{parseFloat(Tendered_format).formatMoney(2)}}</b></h3>
                        </div>
                        <div class="col-md-12">
                            <h3>Devuelta:  <b style="color: green;float:right;font-size: 28px">$ {{parseFloat(Change).formatMoney(2)}}</b></h3>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 10px">
                        <div class="col-md-12" style="bottom: 0;position: absolute">
                            <button type="button"
                                    :disabled="parseFloat(Tendered_format) - parseFloat(Total) < 0"
                                    class="btn btn-lg btn-success"
                                    @click="PayInvoice"
                                    style="width: 100%;font-size: 30px">

                                <i :class="loading ? 'icon-spinner2 spinner' : 'icon-cash3'" style="font-size: 35px"></i>
                                <b> Pagar</b>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <table class="table table-bordered">
                        <tr>
                            <td class="text-center td-hover" @click="pressNumber(1)"><b style="font-size: 30px">1</b></td>
                            <td class="text-center td-hover" @click="pressNumber(2)"><b style="font-size: 30px">2</b></td>
                            <td class="text-center td-hover" @click="pressNumber(3)"><b style="font-size: 30px">3</b></td>
                        </tr>
                        <tr>
                            <td class="text-center td-hover" @click="pressNumber(4)"><b style="font-size: 30px">4</b></td>
                            <td class="text-center td-hover" @click="pressNumber(5)"><b style="font-size: 30px">5</b></td>
                            <td class="text-center td-hover" @click="pressNumber(6)"><b style="font-size: 30px">6</b></td>
                        </tr>
                        <tr>
                            <td class="text-center td-hover" @click="pressNumber(7)"><b style="font-size: 30px">7</b></td>
                            <td class="text-center td-hover" @click="pressNumber(8)"><b style="font-size: 30px">8</b></td>
                            <td class="text-center td-hover" @click="pressNumber(9)"><b style="font-size: 30px">9</b></td>
                        </tr>
                        <tr>
                            <td class="text-center td-hover"><b style="font-size: 30px">.</b></td>
                            <td class="text-center td-hover" @click="pressNumber(0)"><b style="font-size: 30px">0</b></td>
                            <td class="text-center td-hover" @click="tendered = ''"><b style="font-size: 30px">C</b></td>
                        </tr>
                    </table>
                </div>
            </div>
        </template>
    </modal>
</template>

<script>
    import modal from "./modal";
    export default {
        components:{
            modal
        },
        data()
        {
            return {
                tendered:'',
                loading:false
            }
        },
        methods:{
            pressNumber(num)
            {
                if(!this.loading){
                    this.tendered+=num;
                }
            },
            PayInvoice()
            {
                this.loading = true;
                this.$store.dispatch('cart/PayInvoice', {
                    total:this.Total,
                    cash:this.Tendered_format,
                    returns:this.Change
                })
                    .then((res)=> {
                        this.$notify({
                            group: 'foo',
                            title: 'Operación realizada',
                            text: 'Factura guardada con exito',
                            type: 'success',
                        });
                        $("#modal .close").click()
                    })
                    .catch((err)=> {
                        this.$notify({
                            group: 'foo',
                            title: 'Facturacion',
                            text: 'Error al realizar la factura',
                            type: 'warn',
                        });
                    })
                    .finally(()=> {
                        this.loading = false;
                    })
            }
        },
        computed:{
            Total()
            {
                return this.$store.getters['cart/Total']
            },
            Tendered_format()
            {
                return this.tendered == '' ? 0 : parseFloat(this.tendered)
            },
            Change()
            {
                return parseFloat(this.Tendered_format) - parseFloat(this.Total) < 0 ? 0 : parseFloat(this.Tendered_format) - parseFloat(this.Total);
            }
        }

    }
</script>

<style>

    .td-hover:hover {
        background-color: #cccccc;
    }
    td{
        cursor: pointer;
    }

</style>