<template>
    <card style="min-height: 500px">
        <template v-slot:card-header>
            <h3 style="color: #1976d2"><b>{{title}}</b></h3>
            <small class="opacity-75 font-size-sm">{{subtitle}}</small>
        </template>
        <template v-slot:card-body>
            <div class="text-center" v-if="loading">
                <i class="icon-spinner2 spinner" style="font-size: 30px"></i>
                cargando ...
            </div>
            <template v-if="!loading">
                <bar-chart v-if="chartType === 'bar'" :chart-data="chartData" :options="options"></bar-chart>
                <line-chart v-if="chartType === 'line'" :chart-data="chartData" :options="options"></line-chart>
            </template>
        </template>
    </card>
</template>

<script>
    import LineChart from "./LineChart";
    import card from "../card";
    import BarChart from "./BarChart";

    export default {
        components:{
            card,
            BarChart,
            LineChart
        },
        name: "ChartCard",
        data()
        {
            return {

            }
        },
        props:{
            loading:{
                type:Boolean,
                default:false,
                required:true
            },
            title:{
                type:String,
                required:true
            },
            chartData:{
                type:Object,
                required:true
            },
            options:{
                type:Object,
                required:true
            },
            chartType:{
                type:String,
                required:true
            },
            subtitle:{
                type:String,
                default:''
            }
        }
    }
</script>

<style scoped>

</style>