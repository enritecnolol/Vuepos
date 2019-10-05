import {http} from "../http/axios"
import { apis} from "../api";

export const CategoriesServices = {
    getCategories,
    insertCategory,
    getCategoriesPaginate,
    editCategory,
    deleteCategory
};

function getCategories() {
    return new Promise((resolve, reject)=>{
        http.get(apis.routes.categories.all)
            .then(res=>{
                resolve(res.data.data);
            })
            .catch(err=>{
                reject(err);
            })
    })
}

function getCategoriesPaginate({size, url}) {
    return new Promise((resolve, reject)=>{
        var urlRoute = url ? url : apis.routes.categories.all_paginate;
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

function insertCategory(category) {
    return new Promise((resolve, reject)=>{
        http.post(apis.routes.categories.insert, category)
            .then(res=>{
                resolve(res);
            }).catch(err =>{
            reject(err);

        })
    })
}

function editCategory(category) {
    return new Promise((resolve, reject)=>{
        http.put(apis.routes.categories.edit, category)
            .then(res=>{
                resolve(res);
            }).catch(err =>{
            reject(err);

        })
    })
}

function deleteCategory(category) {
    return new Promise((resolve, reject)=>{
        http.delete(apis.routes.categories.delete,{
            data:category
        })
            .then(res=>{
                resolve(res);
            }).catch(err =>{
            reject(err);

        })
    })
}
