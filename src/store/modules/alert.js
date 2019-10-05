export const AlertModule = {
  namespaced: true,
  state: {
    type: null,
    message: ""
  },
  getters: {
    getType(state) {
      return state.type;
    },
    getMessage(state) {
      return state.message;
    }
  },
  mutations: {
    SET_MESSAGE(state, message) {
      state.message = message;
    },
    SUCCESS_ALERT(state) {
      state.type = "success";
    },
    DANGER_ALERT(state) {
      state.type = "danger";
    },
    CLEAR_ALERT(state) {
      state.type = null;
    }
  },
  actions: {
    SET_SUCCESS({ commit }, message) {
      commit("SUCCESS_ALERT");
      commit("SET_MESSAGE", message);
    },
    SET_DANGER({ commit }, message) {
      commit("DANGER_ALERT");
      commit("SET_MESSAGE", message);
    },
    SET_CLEAR({ commit }, message) {
      commit("CLEAR_ALERT");
      commit("SET_MESSAGE", message);
    }
  }
};
