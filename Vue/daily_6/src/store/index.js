import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    orderList: [],
    menuList: [
      {
        title: '아메리카노',
        price: 3000,
        selected: true,
        image: 'https://source.unsplash.com/featured/?americano'
      },
      {
        title: '라떼',
        price: 4000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?latte'
      },
      {
        title: '카푸치노',
        price: 4500,
        selected: false,
        image: 'https://source.unsplash.com/featured/?Capuccino'
      },

    ],
    sizeList: [
      {
        name: 'small',
        price: 0,
        selected: true,
      },
      {
        name: 'medium',
        price: 500,
        selected: false,
      },
      {
        name: 'large',
        price: 1000,
        selected: false,
      },
    ],
    optionList: [
      {
        type: 'shot',
        price: 500,
        count: 0,
      },
      {
        type: 'vanilla syrup',
        price: 1000,
        count: 0,
      },
      {
        type: 'caramel syrup',
        price: 1500,
        count: 0,
      },
    ]
  },
  getters: {
    totalOrderCount(state){
      return state.orderList.length
    },
    totalOrderPrice(state){
      const totalPrice = state.orderList.reduce((total, order) => {
        return total + order.menu.price + order.size.price
        + order.option[0].price * order.option[0].count
        + order.option[1].price * order.option[1].count
        + order.option[2].price * order.option[2].count
      },0)
      return totalPrice

    }
  },
  mutations: {
    addOrder(state, order) {
      const newOrder = {
        menu: {
          title: order.menu.title,
          price: order.menu.price,
          selected: true,
          image: 'https://source.unsplash.com/featured/?americano'
        },
        size: {
          name: order.size.name,
          price: order.size.price,
          selected: true,
        },
        option: {
          0: {
            type: order.option[0].type,
            price: order.option[0].price,
            count: order.option[0].count,
          },
          1: {
            type: order.option[1].type,
            price: order.option[1].price,
            count: order.option[1].count,
          },
          2: {
            type: order.option[2].type,
            price: order.option[2].price,
            count: order.option[2].count,
          },
        }
      }
      state.orderList.push(newOrder)
    },
    updateMenuList(state, idx) {
      state.menuList.forEach((menu,index) => {
        if (index === idx){
          menu.selected = true
        } else {
          menu.selected = false
        }
      })
    },
    updateSizeList(state, idx) {
      state.sizeList.forEach((menu,index) => {
        if (index === idx){
          menu.selected = true
        } else {
          menu.selected = false
        }
      })
    },
    increase(state, option){
      const idx = state.optionList.indexOf(option)
      state.optionList[idx].count += 1
    },
    decrease(state, option){
      const idx = state.optionList.indexOf(option)
      if(state.optionList[idx].count > 0){
        state.optionList[idx].count -= 1
      }
    },
    updateOrderList(state){
      const menuIdx = state.menuList.map((menu)=>{
        if (menu.selected === true){
          return 0
        }
      })
      const menuOrder = state.menuList[menuIdx.indexOf(0)]

      const sizeIdx = state.sizeList.map(menu => {
        if(menu.selected === true){
          return 0
        }
      })

      const sizeOrder = state.sizeList[sizeIdx.indexOf(0)]

      const orderOption0 = state.optionList[0].count
      const orderOption1 = state.optionList[1].count
      const orderOption2 = state.optionList[2].count

      const orderOption = {
          0: {
            type: 'shot',
            price: 500,
            count: orderOption0,
          },
          1: {
            type: 'banila syrup',
            price: 1000,
            count: orderOption1,
          },
          2: {
            type: 'caramel syrup',
            price: 1500,
            count: orderOption2,
          },
      }

      const newOrder = {
        menu: menuOrder,
        size: sizeOrder,
        option: orderOption,
      }
      state.orderList.push(newOrder)
      console.log(newOrder)
    }

  },
  actions: {
  },
  modules: {
  }
})