<template>
    <div class="row">
        <div class="col-md-12">
            <card>
                <template v-slot:card-body>
                    <div class="row">
                        <div class="col-md-12 col-lg-12 col-sm-12">
                            <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                                <li class="nav-item"><a href="#bottom-justified-tab1" class="nav-link active" data-toggle="tab"><h6>Compañia</h6></a></li>
<!--                                <li class="nav-item"><a href="#bottom-justified-tab2" class="nav-link" data-toggle="tab">Inactive</a></li>-->
                            </ul>

                            <div class="tab-content">
                                <div class="tab-pane fade active show" id="bottom-justified-tab1" style="min-height: 300px">
                                    <Companies />
                                </div>

<!--                                <div class="tab-pane fade" id="bottom-justified-tab2">-->
<!--                                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid laeggin.-->
<!--                                </div>-->
                            </div>
                        </div>
                    </div>
                </template>
            </card>
        </div>
    </div>
</template>

<script>
    import card from "../components/card";
    import Companies from "./Companies";
    export default {
        components:{
            card,
            Companies
        }
    }
</script>

<style scoped>

</style>