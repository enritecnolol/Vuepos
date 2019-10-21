<template>
    <card>
        <template v-slot:card-hearder></template>
        <template v-slot:card-body>
            <div class="row">
                <template v-if="!loading">
                    <div class="col-md-12">
                        <h3 class="font-weight-semibold text-primary-700 mb-0">${{parseFloat(amount).formatMoney(2)}}</h3>
                    </div>
                    <div class="col-md-12">
                        <b>{{title}}</b>
                    </div>
                    <div class="col-md-12">
                        <small class="opacity-75 font-size-sm">Cantidad de vendida: {{quantity}}</small>
                    </div>
                </template>
                <template v-else>
                    <div class="col-md-12">
                        <div class="text-center">
                            <i class="icon-spinner2 spinner" style="font-size: 30px"></i>
                             cargando ...
                        </div>
                    </div>
                </template>
            </div>
        </template>
    </card>
</template>

<script>
    import { CartServices } from "../../service/CartServices";
    import card from "../card";
    export default {
        components:{
            card
        },
        props:{
            title:{
                type:String
            },
            from_date:{
                type:String
            },
            to_date:{
                type:String
            }
        },
        data()
        {
            return {
                loading:false,
                amount:0,
                quantity:0
            }
        },
        methods:{
            load()
            {
                this.loading = true;
                CartServices.Summary({
                    from_date:this.from_date,
                    to_date:this.to_date
                })
                    .then(res => {
                        this.amount = res.data.data.total;
                        this.quantity = res.data.data.quantity;
                    })
                    .catch(err => {
                        this.$notify({
                            group: 'foo',
                            title: 'Dashboard',
                            text: err.response.data.message,
                            type: 'warn ',
                        });
                    })
                    .finally(()=> {
                        this.loading = false;
                    })

            }
        },
        created() {
            this.load();
        }
    }
</script>

<style scoped>

</style>