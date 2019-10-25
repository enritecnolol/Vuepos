<template>
    <chart-card
            :title="'Ventas diarias'"
            :loading="loading"
            :chart-data="chartData"
            :options="options"
            :chartType="'bar'"
            :subtitle="subtitle"
            :get-error="getError"
            @endFiltering="endFiltering"
    >
        <template v-slot:filters>
            <div class="col-lg-12">
                <date-filters @datePicked="datePicked"></date-filters>
            </div>
        </template>
    </chart-card>
</template>

<script>
    import { ChartMixin } from "./ChartMixin";
    import { DashboardServices } from "../../service/DashboardServices";
    import moment from '../../lib/moment'
    export default {
        mixins:[ChartMixin],
        created () {
            this.from_date = moment().startOf('month').format('YYYY-MM-DD');
            this.to_date = moment().endOf('month').format('YYYY-MM-DD');
            this.load()
        },
        methods: {
            load () {
                this.loading = true;
                DashboardServices.DailySales({
                    from_date:this.from_date,
                    to_date:this.to_date
                })
                    .then(res => {
                        this.data = res.data.data;
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
            },
        },
        computed:{
            chartData()
            {
                var options = {
                    labels: [],
                    datasets: [
                        {
                            label: 'Monto',
                            fill: true,
                            backgroundColor: "rgb(25, 118, 210)",
                            data: []
                        }
                    ]
                };

                for (var i in this.data)
                {
                        options.labels.push(this.data[i]['_day']+"-"+this.data[i]['_month']);
                        options.datasets[0].data.push(this.data[i]['total']);
                }
                return options;
            },
            options()
            {
                return {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend:{
                        display:false
                    },
                    tooltips: {
                        callbacks: {
                            label: function(tooltipItem, data) {
                                return "Monto: $"+ parseFloat(tooltipItem.yLabel).formatMoney(2);
                            }
                        }
                    }
                }
            },
            subtitle()
            {
                return "Desde: "+this.from_date +" - "+ "hasta: "+ this.to_date
            }
        }
    }
</script>

<style>

</style>