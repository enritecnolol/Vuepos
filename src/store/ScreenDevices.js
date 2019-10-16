export const ScreenDevicesModule = {
    namespaced: true,
    state: {
        width:0,
        height:0
    },
    getters: {

    },
    mutations: {
        SET_WIDTH_HEIGHT(state, data)
        {
            state.width = data.width;
            state.height = data.height;
        }
    },
    actions: {
        ScreenSize({dispatch, commit}, {width, height})
        {
            commit('SET_WIDTH_HEIGHT', {
                width:width,
                height:height
            })
        }
    }
};
