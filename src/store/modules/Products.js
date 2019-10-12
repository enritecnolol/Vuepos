import { ProductsServices } from "../../service/ProductsService";

export const ProductsModules = {
    namespaced: true,
    state:{
        products:[]
    },
    mutations:{
        SET_products(state, data)
        {
            state.products = data
        }
    },
    actions:{
        putProducts({commit, dispatch}, products)
        {
            commit('SET_products', products);
        },
        getProducts({commit, dispatch}, {category}){
            return new Promise((resolve, reject)=>{
                ProductsServices.getProducts(category)
                    .then(res=>{
                        commit('SET_products', res);
                        resolve(res);
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        getsearchProduct({commit, dispatch}, search){
            return new Promise((resolve, reject)=>{
                ProductsServices.SearchProductOrBarcode(search)
                    .then(res=>{
                        resolve(res);
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        }
    },
    getters:{

    }
}