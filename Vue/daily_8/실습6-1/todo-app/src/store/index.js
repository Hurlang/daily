import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
			// 개별 todo Object
      {
        id: 1638771553377,                // nowDateObj.getTime()
        content: 'Vue',                   // Todo 내용
        dueDateTime: '2021-12-09T00:00',  // 마감일
        isCompleted: false,               // 완료된 할 일
        isImportant: true,				        // 중요 할 일
      },
      {
        id: 1638771553378,
        content: 'Vue Router',
        dueDateTime: '2021-12-10T00:00',
        isCompleted: false,
        isImportant: true,
      },
      {
        id: 16387715533779,
        content: 'Vuex',
        dueDateTime: '2021-12-11T00:00',
        isCompleted: true,
        isImportant: false,
      },
    ],
  },
  getters: {
    todayList(state) {
      return state.list.filter(item => {
        return !item.isCompleted && item.dueDateTime === new Date().toISOString().slice(0,11)+'00:00'
      })
    },
    importantList(state) {
      return state.list.filter(item => {
        return !item.isCompleted && item.isImportant
      })
    }
  },
  mutations: {
    CREATE_TODO(state, todo) {
      state.list.push(todo)
    },
    COMPLETE_TODO(state, todo) {
      state.list.forEach(item => {
        if(item === todo){
          item.isCompleted = !item.isCompleted
        }
      })
    },
    IMPORTANT_TODO(state, todo) {
      state.list.forEach(item => {
        if (item === todo) {
          item.isImportant = !item.isImportant
        }
      })
    },
    UPDATE_TODO(state, todo) {
      state.list = state.list.filter(item => {
        if(item.id === todo.id){
          item.content = todo.content
          item.dueDateTime = todo.dueDateTime
        }
        return item
      })
    }
    
  },
  actions: {
    createTodo(context, todo) {
      context.commit('CREATE_TODO', todo)
    },
    completeTodo(context, todo) {
      context.commit('COMPLETE_TODO', todo)
    },
    importantTodo(context, todo) {
      context.commit('IMPORTANT_TODO', todo)
    },
    updateTodo(context, todo) {
      context.commit('UPDATE_TODO', todo)
    }
  },
  modules: {
  }
})
