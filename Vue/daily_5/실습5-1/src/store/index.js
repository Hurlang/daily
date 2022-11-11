import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [],
    sizeList: [],
  },
  getters: {
  },
  mutations: {
    addOrder: function () {},
    updateMenuList: function () {},
    updateSizeList: function () {},
  },
  actions: {
  },
  modules: {
  }
})