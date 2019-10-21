import {http} from "../http/axios"
import { apis} from "../api";

export const CartServices = {
    PayInvoice,
    Summary
};

function PayInvoice(data) {
    return new Promise((resolve, reject)=>{
        http.post(apis.routes.cart.payInvoice, data)
            .then(res=>{
                resolve(res);
            })
            .catch(err=>{
                reject(err);
            })
    })
}

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

