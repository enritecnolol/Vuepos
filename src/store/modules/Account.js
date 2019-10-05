import { auhtService } from "../../service/AuthServices";
import {http} from "../../http/axios";

export const AccountModule = {
    namespaced: true,
    state: {
        auth_user: JSON.parse(localStorage.getItem('user')) || null,
        auth_token: localStorage.getItem('token') || null,
        auth_pending: false,
    },
    mutations: {
        SET_TOKEN (state, token) {
            state.auth_token = token;
        },
        SET_USER (state, user) {
            state.auth_user = user;
        },
        SET_AUTH_PENDING (state, loading) {
            state.auth_pending = loading;
        },
    },
    actions: {
        login ({commit, dispatch}, {email, password}) {
            commit('SET_AUTH_PENDING', true);
            return new Promise((resolve, reject)=>{
                auhtService.login({email, password})
                    .then(res=>{
                        commit("SET_TOKEN", res.token);
                        commit("SET_USER", res.user);
                        localStorage.setItem('user', JSON.stringify(res.user));
                        localStorage.setItem('token', res.token);
                        http.setToken(res.token);
                        resolve(res);
                    })
                    .catch(err =>{
                        reject(err);
                    })
                    .finally(()=>{
                        commit('SET_AUTH_PENDING', false);
                    });
            });
        },
        logout ({commit, state}) {
            return new Promise((resolve, reject)=>{
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
                resolve()
            });


        },
    },
    getters: {
        isLogged (state) {
            return state.auth_user != null && state.auth_token != null
        },
        user_data (state){
            return state.auth_user;
        }
    },
};
