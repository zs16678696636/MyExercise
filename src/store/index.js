import Vue from 'vue'
import Vuex from 'vuex'
import mybank from './modules/mybank'
import demo from './modules/demo'
import loading from './modules/loading'
import vuexAlong from 'vuex-along'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [vuexAlong],
  modules: { mybank, demo, loading }
})
