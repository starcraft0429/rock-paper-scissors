import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import CommonModule from "./common";

Vue.use(Vuex);

const vuexStateStorage = new VuexPersist({
  key: "vuex",
  storage: window.localStorage,
  reducer: (state) => ({
    common: {
      score: state.common.score,
    },
  }),
});

export default new Vuex.Store({
  modules: {
    common: CommonModule,
  },
  plugins: [vuexStateStorage.plugin],
});
