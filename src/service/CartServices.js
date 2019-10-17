import {http} from "../http/axios"
import { apis} from "../api";

export const CartServices = {
    PayInvoice,
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

