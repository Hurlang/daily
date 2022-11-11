<template>
  <div id="app">
    <h1>Todo</h1>
    <h2>All todos: {{ allTodosCount }}</h2>
    <h2>Completed todos: {{ completedTodosCount }}</h2>
    <h2>unCompleted todos: {{ unCompletedTodosCount }}</h2>
    <TodoList/>
    <TodoForm/>
    <button
      @click="loadTodos"
    >불러오기</button>

  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'

export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList,
  },
  methods:{
    loadTodos() {
      this.$store.dispatch('loadTodos')
    }
  },
  computed: {
    allTodosCount() {
      return this.$store.getters.allTodosCount
    },
    completedTodosCount() {
      return this.$store.getters.completedTodosCount
    },
    unCompletedTodosCount() {
      return this.$store.getters.unCompletedTodosCount
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
