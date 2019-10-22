import {http} from "../http/axios"
import { apis } from "../api";

export const DashboardServices = {
    Summary,
    SalePerMonth,
    DailySales,
    SalesByCategory,
    HourlySales,
    SalesByDaysOfTheWeek,
    MostSellingProducts
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

function SalesByCategory({from_date, to_date}) {
    return new Promise((resolve, reject)=>{
        http.get(apis.routes.dashboard.salesByCategory, {
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

function HourlySales({from_date, to_date}) {
    return new Promise((resolve, reject)=>{
        http.get(apis.routes.dashboard.hourlySales, {
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
function SalesByDaysOfTheWeek({from_date, to_date}) {
    return new Promise((resolve, reject)=>{
        http.get(apis.routes.dashboard.SalesByDaysOfTheWeek, {
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
function MostSellingProducts({from_date, to_date}) {
    return new Promise((resolve, reject)=>{
        http.get(apis.routes.dashboard.MostSellingProducts, {
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

