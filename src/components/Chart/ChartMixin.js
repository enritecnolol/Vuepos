import LineChart from "./LineChart";
import card from "../card";
import BarChart from "./BarChart";
import ChartCard from "./ChartCard";
import { DashboardServices } from "../../service/DashboardServices";
import moment from '../../lib/moment'
export const ChartMixin = {
    components:{
        LineChart,
        card,
        BarChart,
        ChartCard
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
            to_date:''
        }
    },
};