<template>
    <div>
        <card style="min-height: 500px">
            <template v-slot:card-header>
                <template v-if="!filtering">
                    <h3 style="color: #1976d2"><b>{{title}}</b></h3>
                    <small class="opacity-75 font-size-sm" v-if="!filtering && !getError">{{subtitle}}</small>
                    <button ref="buttonModal" id="buttonModal"  style="display: none" data-toggle="modal" data-target="#modal"></button>
                    <i class="icon-cog3 filters_button" @click="startFiltering" style=""></i>
                </template>
            </template>
            <template v-slot:card-body>
                <div class="text-center" v-if="loading">
                    <i class="icon-spinner2 spinner" style="font-size: 30px"></i>
                    cargando ...
                </div>
                <template v-if="!loading && !filtering && !getError">
                    <bar-chart v-if="chartType === 'bar'" :chart-data="chartData" :options="options"></bar-chart>
                    <line-chart v-if="chartType === 'line'" :chart-data="chartData" :options="options"></line-chart>
                </template>
                <template v-if="getError && !loading && !filtering " >
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-center">
                                <i class="icon-info22"></i><h2> No hemos entrado datos con este filtro</h2>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-if="filtering">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="filter-header d-flex justify-content-between" style="margin-bottom: 15px;animation-duration: 0.3s;">
                                <div>
                                    <h6 style="margin: 0">Opciones de <span class="font-weight-semibold">filtrado</span></h6>
                                </div>
                                <div>
                                    <h6 style="cursor: pointer;margin: 0" class="font-weight-semibold" @click="endFiltering">
                                        <i class="icon-circle-left2"></i>
                                        Aplicar y volver
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <slot name="filters"></slot>
                    </div>
                </template>
            </template>
        </card>
    </div>
</template>

<script>
    import LineChart from "./LineChart";
    import card from "../card";
    import BarChart from "./BarChart";

    export default {
        components:{
            card,
            BarChart,
            LineChart,
        },
        name: "ChartCard",
        data()
        {
            return {
                filtering:false
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
            },
            getError:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            startFiltering()
            {
                this.filtering = true;
            },
            endFiltering()
            {
                this.filtering = false;
                this.$emit('endFiltering', false);
            }

        }
    }
</script>

<style>
    .filters_button{
        position: absolute;
        right: 10px;
        top: 25px;
        font-size: 18px;
        color: #0a6ebd;
    }

    .filter-header {
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(10,108,186,1) 34%, rgba(10,119,189,1) 65%, rgba(0,56,251,1) 100%);
        color: white;
        border: 1px solid #0a6ebd;
        width: 100%;
        padding: 5px 15px;
        border-radius: 5px;
    }
</style>