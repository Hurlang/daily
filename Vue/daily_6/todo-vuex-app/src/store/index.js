import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    allTodosCount(state){
      return state.todos.length
    },
    completedTodosCount(state){
      const completedTodos = state.todos.filter(todo => {
        return todo.isCompleted
      })
      return completedTodos.length
    },
    unCompletedTodosCount(state, getters){
      return getters.allTodosCount - getters.completedTodosCount
    }
  },
  mutations: {
    ON_INPUT_DATA(state, inputData){
      const newTodo = {title: inputData, isCompleted: false, date : new Date().getTime()}
      state.todos.push(newTodo)
    },
    ON_COMPLETE(state, todo){
      state.todos = state.todos.map((t) => {
        if(t === todo){
          t.isCompleted = !t.isCompleted
        }
        return t
      })
    },
    DELETE_TODO(state, todo){
      const idx = state.todos.indexOf(todo)
      console.log(idx)
      state.todos.splice(idx, 1)
    },
    LOAD_TODOS(state){
      const localStorageTodos = localStorage.getItem('todos')
      const parsedTodos = JSON.parse(localStorageTodos)
      state.todos = parsedTodos
    }
  
  },
  actions: {
    onInputData(context, inputData){
      context.commit('ON_INPUT_DATA', inputData)
      context.dispatch('saveTodosToLocalStorage')
    },
    onComplete(context, todo){
      context.commit('ON_COMPLETE', todo)
      context.dispatch('saveTodosToLocalStorage')
    },
    deleteTodo(context, todo){
      context.commit('DELETE_TODO', todo)
      context.dispatch('saveTodosToLocalStorage')
    },
    saveTodosToLocalStorage(context){
      const jsonTodos = JSON.stringify(context.state.todos)
      localStorage.setItem('todos', jsonTodos)
    },
    loadTodos(context){
      context.commit('LOAD_TODOS')
    }
  },
  modules: {
  }
})
