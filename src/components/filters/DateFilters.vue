<template>
    <div>
        <date-picker
                v-if="type==='date'"
                v-model="date"
                range
                lang="es"
                :shortcuts="shortcuts"
                type="type"
                :range-separator="'-'"
                :format="'DD-MM-YYYY'"
        ></date-picker>
        <date-picker
                v-if="type==='year'"
                v-model="date"
                lang="es"
                :shortcuts="shortcuts"
                type="year"
                :format="'YYYY'"
        ></date-picker>
    </div>
</template>

<script>
    import DatePicker from 'vue2-datepicker'
    import { getRelativeDates, Names} from "../../lib/relativedates";
    import moment from '../../lib/moment'
    export default {
        components:{
            DatePicker
        },
        props:{
          type:{
              type:String,
              default:'date'
          }
        },
        data()
        {
            return {
                date: null,
                shortcuts: [
                        {
                            text: "Hoy",
                            onClick: () => {
                                this.date = getRelativeDates(Names.TODAY).map(d => d.toDate());
                                this.datePicked();
                            }
                        },
                        {
                            text: "Ayer",
                            onClick: () => {
                                this.date = getRelativeDates(Names.YESTERDAY).map(d =>
                                    d.toDate()
                                );
                                this.datePicked();
                            }
                        },
                        {
                            text: "Esta semana",
                            onClick: () => {
                                this.date = getRelativeDates(Names.THIS_WEEK).map(d =>
                                    d.toDate()
                                );
                                this.datePicked();
                            }
                        },
                        {
                            text: "Este mes",
                            onClick: () => {
                                this.date = getRelativeDates(Names.THIS_MONTH).map(d =>
                                    d.toDate()
                                );
                                this.datePicked();
                            }
                        },
                        {
                            text: "Este año",
                            onClick: () => {
                                this.date = getRelativeDates(Names.THIS_YEAR).map(d =>
                                    d.toDate()
                                );
                                this.datePicked();
                            }
                        },
                        {
                            text: "Mes pasado",
                            onClick: () => {
                                this.date = getRelativeDates(Names.LAST_MONTH).map(d =>
                                    d.toDate()
                                );
                                this.datePicked();
                            }
                        }
                    ]
            };
        },
        watch:{
          date()
          {
              if(this.type === 'year')
              {
                  this.$emit('datePicked', {
                      from_date : moment(this.date).startOf("year").format('YYYY-MM-DD'),
                      to_date : moment(this.date).endOf("year").format('YYYY-MM-DD'),
                  })
              }else{

                  this.$emit('datePicked', {
                      from_date : moment(this.date[0]).format('YYYY-MM-DD'),
                      to_date : moment(this.date[1]).format('YYYY-MM-DD'),
                  })
              }
          }
        },
        methods:{
            datePicked()
            {
                this.$emit('datePicked', {
                    from_date : moment(this.date[0]).format('YYYY-MM-DD'),
                    to_date : moment(this.date[1]).format('YYYY-MM-DD'),
                })
            }
        }
    }
</script>

<style scoped>

</style>