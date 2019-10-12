import { CategoriesServices } from "../../service/CategoriesServices";

export const CategoriesModules = {
    namespaced: true,
    state:{
        categories:[],
        categorySelected:''
    },
    mutations:{
        SET_CATEGORIES(state, data)
        {
            state.categories = data
        },
        SET_CATEGORY_SELECTED(state, data)
        {
            state.categorySelected =  data
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
        },
        changeCategorySelected({commit, dispatch}, data)
        {
            commit('SET_CATEGORY_SELECTED', data)
        }

    },
    getters:{

    }
}