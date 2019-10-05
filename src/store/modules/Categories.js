import { CategoriesServices } from "../../service/CategoriesServices";

export const CategoriesModules = {
    namespaced: true,
    state:{
        categories:[]
    },
    mutations:{

    },
    actions:{
        getCategories({commit, dispatch}){
            return new Promise((resolve, reject)=>{
                CategoriesServices.getCategories()
                    .then(res=>{
                        commit('')
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