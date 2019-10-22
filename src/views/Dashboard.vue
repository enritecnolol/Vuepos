<template>
    <div class="row">
        <div class="col-md-6 col-sm-12 col-lg-3" v-for="(item, index) in summary" :key="index">
            <Summary :title="item.title" :from_date="item.from_date" :to_date="item.to_date" />
        </div>
        <div class="col-md-6 col-sm-12 col-lg-6" style="margin-top: 10px">
            <SalePerMoth />
        </div>
        <div class="col-md-6 col-sm-12 col-lg-6" style="margin-top: 10px">
            <DailySales />
        </div>
        <div class="col-md-6 col-sm-12 col-lg-6" style="margin-top: 10px">
            <SalesByCategories />
        </div>
        <div class="col-md-6 col-sm-12 col-lg-6" style="margin-top: 10px">
            <HourlySales />
        </div>
        <div class="col-md-6 col-sm-12 col-lg-6" style="margin-top: 10px">
            <SalesByDaysOfTheWeek />
        </div>
        <div class="col-md-6 col-sm-12 col-lg-6" style="margin-top: 10px">
            <MostSellingProducts />
        </div>
    </div>
</template>

<script>
    import moment from '../lib/moment'
    import card from "../components/card";
    import Summary from "../components/Chart/Summary";
    import SalePerMoth from "../components/Chart/SalePerMoth";
    import DailySales from "../components/Chart/DailySales";
    import SalesByCategories from "../components/Chart/SalesByCategories";
    import HourlySales from "../components/Chart/HourlySales";
    import SalesByDaysOfTheWeek from "../components/Chart/SalesByDaysOfTheWeek";
    import MostSellingProducts from "../components/Chart/MostSellingProducts";

    export default {
        name: "Dashboard",
        components:{
            card,
            Summary,
            SalePerMoth,
            DailySales,
            SalesByCategories,
            HourlySales,
            SalesByDaysOfTheWeek,
            MostSellingProducts
        },
        data () {
            return {

            }
        },
        methods: {

        },
        computed:{
            summary(){
                return [
                    {
                        title:'Total del dia',
                        from_date: moment().format('YYYY-MM-DD'),
                        to_date: moment().format('YYYY-MM-DD'),
                    },
                    {
                        title:'Total de la semana',
                        from_date: moment().startOf('week').format('YYYY-MM-DD'),
                        to_date: moment().endOf('week').format('YYYY-MM-DD')
                    },
                    {
                        title:'Total del mes',
                        from_date: moment().startOf('month').format('YYYY-MM-DD'),
                        to_date: moment().endOf('month').format('YYYY-MM-DD')
                    },
                    {
                        title:'Total del año',
                        from_date: moment().startOf('year').format('YYYY-MM-DD'),
                        to_date: moment().endOf('year').format('YYYY-MM-DD')
                    },
                ]
            }
        }
    }
</script>

<style>

</style>