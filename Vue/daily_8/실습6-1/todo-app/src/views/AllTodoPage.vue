<template>
  <div>
    <div class="p">
      <h1>All Todo</h1>
      <form @submit.prevent="createTodo">
        <button><i class="fa-solid fa-plus"></i></button>
        <input
          type="text"
          v-model="content"
          placeholder="할 일을 작성해주세요!"
        >
      </form>
      <hr>
    </div>
    <AllItem
      v-for="todo in todoList"
      :key="todo.id"
      :todo="todo"
    />
  </div>
</template>

<script>
import AllItem from '@/components/AllItem'
export default {
  name: 'AllTodoPage',
  components: {
    AllItem
  },
  data() {
    return {
      content: null,
    }
  },
  computed: {
    todoList() {
      return this.$store.state.list
    }
  },
  methods: {
    createTodo() {
      if (!this.content){
        alert('내용을 입력해주세요!')
      } else {
        const todo = {
        id: new Date().getTime(),
        content: this.content,
        dueDateTime: new Date().toISOString().slice(0,11)+'00:00',
        isCompleted: false,
        isImportant: false,
      }
      this.$store.dispatch('createTodo', todo)
      this.content = null
      }
    }
  },
}

</script>

<style>

</style>