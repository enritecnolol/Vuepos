<template>
    <modal>
        <template v-slot:modalHeader>
            <h3 class="modal-title"><b>Precio a pagar: </b> <b style="color: green">{{Total}}</b></h3>
        </template>
        <template v-slot:modalBody>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group form-group-feedback form-group-feedback-left">
                        <input type="text" class="form-control form-control-lg" autofocus style="width: 250px" placeholder="Efectivo">
                        <div class="form-control-feedback form-control-feedback-lg">
                            <i class="icon-cash" style="color: #293a50"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-4 text-center"><button type="button" class="btn btn-lg btn-primary" style="width: 100px;height: 80px;font-size: 30px"><b>1</b></button></div>
                        <div class="col-md-4 text-center"><button type="button" class="btn btn-lg btn-primary" style="width: 100px;height: 80px;font-size: 30px"><b>2</b></button></div>
                        <div class="col-md-4 text-center"><button type="button" class="btn btn-lg btn-primary" style="width: 100px;height: 80px;font-size: 30px"><b>3</b></button></div>
                    </div>
                    <div class="row" style="margin-top: 10px">
                        <div class="col-md-4 text-center"><button type="button" class="btn btn-lg btn-primary" style="width: 100px;height: 80px;font-size: 30px"><b>4</b></button></div>
                        <div class="col-md-4 text-center"><button type="button" class="btn btn-lg btn-primary" style="width: 100px;height: 80px;font-size: 30px"><b>5</b></button></div>
                        <div class="col-md-4 text-center"><button type="button" class="btn btn-lg btn-primary" style="width: 100px;height: 80px;font-size: 30px"><b>6</b></button></div>
                    </div>
                    <div class="row" style="margin-top: 10px">
                        <div class="col-md-4 text-center"><button type="button" class="btn btn-lg btn-primary" style="width: 100px;height: 80px;font-size: 30px"><b>7</b></button></div>
                        <div class="col-md-4 text-center"><button type="button" class="btn btn-lg btn-primary" style="width: 100px;height: 80px;font-size: 30px"><b>8</b></button></div>
                        <div class="col-md-4 text-center"><button type="button" class="btn btn-lg btn-primary" style="width: 100px;height: 80px;font-size: 30px"><b>9</b></button></div>
                    </div>
                    <div class="row" style="margin-top: 10px">
                        <div class="col-md-4 text-center"><button type="button" class="btn btn-lg btn-primary" style="width: 100px;height: 80px;font-size: 30px"><b>.</b></button></div>
                        <div class="col-md-4 text-center"><button type="button" class="btn btn-lg btn-primary" style="width: 100px;height: 80px;font-size: 30px"><b>0</b></button></div>
                        <div class="col-md-4 text-center"><button type="button" class="btn btn-lg btn-primary" style="width: 100px;height: 80px;font-size: 30px"><b>00</b></button></div>
                    </div>
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
        computed:{
            Total()
            {
                return parseFloat(this.$store.getters['cart/Total']).formatMoney(2)
            },
        }

    }
</script>

<style scoped>

</style>