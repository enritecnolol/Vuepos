import { CategoriesServices } from "../../service/CategoriesServices";

export const CategoriesModules = {
    namespaced: true,
    state:{
        categories:[]
    },
    mutations:{
        SET_CATEGORIES(state, data)
        {
            state.categories = data
        }
    },
    actions:{
        getCategories({commit, dispatch}){
            return new Promise((resolve, reject)=>{
                CategoriesServices.getCategories()
                    .then(res=>{
                        commit('SET_CATEGORIES', res);
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