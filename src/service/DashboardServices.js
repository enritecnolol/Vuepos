import {http} from "../http/axios"
import { apis } from "../api";

export const DashboardServices = {
    Summary,
    SalePerMonth,
    DailySales
};

function Summary({from_date, to_date}) {
    return new Promise((resolve, reject)=>{
        http.get(apis.routes.cart.summary, {
            params:{
                from_date, to_date
            }
        })
            .then(res=>{
                resolve(res);
            })
            .catch(err=>{
                reject(err);
            })
    })
}

function SalePerMonth({from_date, to_date}) {
    return new Promise((resolve, reject)=>{
        http.get(apis.routes.dashboard.salePerMonth, {
            params:{
                from_date, to_date
            }
        })
            .then(res=>{
                resolve(res);
            })
            .catch(err=>{
                reject(err);
            })
    })
}

function DailySales({from_date, to_date}) {
    return new Promise((resolve, reject)=>{
        http.get(apis.routes.dashboard.dailySales, {
            params:{
                from_date, to_date
            }
        })
            .then(res=>{
                resolve(res);
            })
            .catch(err=>{
                reject(err);
            })
    })
}

