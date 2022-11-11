<template>
  <div>
    <div class="p">
      <h1>Today Todo</h1> 
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
    <TodayItem
      v-for="todo in todoList"
      :key="todo.id"
      :todo="todo"
    />
  </div>
</template>

<script>
import TodayItem from '@/components/TodayItem'

export default {
  name: 'TodayTodoPage',
  components: {
    TodayItem,
  },
  data() {
    return {
      content: null,
    }
  },
  computed: {
    todoList() {
      return this.$store.getters.todayList
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
  }
}
</script>

<style>

</style>