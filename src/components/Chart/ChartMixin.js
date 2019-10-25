import LineChart from "./LineChart";
import card from "../card";
import BarChart from "./BarChart";
import ChartCard from "./ChartCard";
import DateFilters from "../filters/DateFilters";

export const ChartMixin = {
    components:{
        LineChart,
        card,
        BarChart,
        ChartCard,
        DateFilters
    },
    created()
    {
    },
    data()
    {
        return{
            loading:false,
            data: null,
            from_date:'',
            to_date:'',
            filtering:false
        }
    },
    methods:{
        datePicked({from_date, to_date})
        {
            this.from_date = from_date;
            this.to_date = to_date;
        },
        endFiltering(state)
        {
            this.load();
        }
    },
    computed:{
        getError()
        {
            return this.data === null || this.data === "[]";
        }
    }
};