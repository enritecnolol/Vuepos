<template>
    <chart-card
            :title="'Ventas por mes'"
            :loading="loading"
            :chart-data="chartData"
            :options="options"
            :chartType="'bar'"
    />
</template>

<script>
    import { ChartMixin } from "./ChartMixin";
    import { DashboardServices } from "../../service/DashboardServices";
    import moment from '../../lib/moment'
    export default {
        mixins:[ChartMixin],
        created () {
            this.from_date = moment().startOf('year').format('YYYY-MM-DD');
            this.to_date = moment().endOf('year').format('YYYY-MM-DD');
            this.load()
        },
        methods: {
            load () {
                this.loading = true;
                DashboardServices.SalePerMonth({
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
                    for (var index in this.data[i]){
                        options.labels.push(index);
                        options.datasets[0].data.push(this.data[i][index][0]);
                    }
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
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>