import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList:[
      {
        title: '아메리카노',
        price: 3000,
        selected: true,
        image: '<https://source.unsplash.com/featured/?americano>'
      },
      {
        title: '라떼',
        price: 3500,
        selected: true,
        image: '<https://source.unsplash.com/featured/?latte>'
      },
      {
        title: '쥬스',
        price: 2500,
        selected: true,
        image: '<https://source.unsplash.com/featured/?juice>'
      }
    ],
    sizeList: [
      {
        name: 'Tall',
        price: 500,
        selected: true,
      },
      {
        name: 'Grande',
        price: 1000,
        selected: true,
      },
      {
        name: 'Venti',
        price: 1500,
        selected: true,
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
