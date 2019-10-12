import {http} from "../http/axios"
import { apis} from "../api";

export const ProductsServices = {
    getProducts,
    insertProduct,
    getProductsPaginate,
    editProduct,
    deleteProduct,
    SearchProductOrBarcode
};

function getProducts(category) {
    return new Promise((resolve, reject)=>{
        http.get(apis.routes.products.all, {
            params:{
                category
            }
        })
            .then(res=>{
                resolve(res.data.data);
            })
            .catch(err=>{
                reject(err);
            })
    })
}

function getProductsPaginate({size, url}) {
    return new Promise((resolve, reject)=>{
        var urlRoute = url ? url : apis.routes.products.all_paginate;
        http.get( urlRoute, {
            params:{
                size:size
            }
        })
            .then(res=>{
                resolve(res.data.data);
            })
            .catch(err=>{
                reject(err);
            })
    })
}

function insertProduct(Product) {
    return new Promise((resolve, reject)=>{
        http.post(apis.routes.products.insert, Product)
            .then(res=>{
                resolve(res);
            }).catch(err =>{
            reject(err);

        })
    })
}

function editProduct(Product) {
    return new Promise((resolve, reject)=>{
        http.put(apis.routes.products.edit, Product)
            .then(res=>{
                resolve(res);
            }).catch(err =>{
            reject(err);

        })
    })
}

function deleteProduct(Product) {
    return new Promise((resolve, reject)=>{
        http.delete(apis.routes.products.delete,{
            data:Product
        })
            .then(res=>{
                resolve(res);
            }).catch(err =>{
            reject(err);

        })
    })
}

function SearchProductOrBarcode(search) {
    return new Promise((resolve, reject)=>{
        http.get(apis.routes.products.search,{
            params:{
                search:search
            }
        })
            .then(res=>{
                resolve(res.data.data);
            }).catch(err =>{
            reject(err);

        })
    })
}
