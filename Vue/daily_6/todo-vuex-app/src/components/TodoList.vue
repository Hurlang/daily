<template>
  <div>
    <h3>Todo List</h3>
    <TodoListItem
      v-for="todo in todos"
      :key="`todos-${todo.date}`"
      :todo="todo"
    />
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'
export default {
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  computed: {
    todos() {
      return this.$store.state.todos
    }
  }
}
</script>

<style>

</style>