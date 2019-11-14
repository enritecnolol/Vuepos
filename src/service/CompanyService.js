import {http} from "../http/axios"
import { apis} from "../api";

export const CompanyServices = {
    storeCompany,
    getCompany,
    editCompany
};

function storeCompany(data) {
    return new Promise((resolve, reject)=>{
        http.post(apis.routes.company.store, data)
            .then(res=>{
                resolve(res.data.data);
            })
            .catch(err=>{
                reject(err);
            })
    })
}

function getCompany() {
    return new Promise((resolve, reject)=>{
        http.get(apis.routes.company.get)
            .then(res=>{
                resolve(res.data.data);
            })
            .catch(err=>{
                reject(err);
            })
    })
}

function editCompany(data) {
    return new Promise((resolve, reject)=>{
        http.put(apis.routes.company.edit, data)
            .then(res=>{
                resolve(res);
            }).catch(err =>{
            reject(err);

        })
    })
}