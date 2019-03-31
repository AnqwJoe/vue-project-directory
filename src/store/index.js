import Vue from "vue";
import Vuex from "vuex";
//引入
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
//模块引进
import user from "./module/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    user
  }
});
