<template>
  <div class="d-flex row justify-between item_skin m inner_p">
    <div @click="completeTodo">
      <span><i
        class="fa-regular fa-xl"
        :class="{'fa-circle':!todo.isCompleted, 'fa-circle-check':todo.isCompleted}"
      ></i></span>
      <span class="ms-1">{{ todo.content }}</span>
    </div>
    <span
      @click="importantTodo"
    ><i
      class="fa-star"
      :class="{'fa-regular':!todo.isImportant, 'fa-solid':todo.isImportant}"
    ></i></span>
  </div>
</template>

<script>
export default {
  name: 'TodayItem',
  props: {
    todo: Object,
  },
  methods: {
    completeTodo() {
      this.$store.dispatch('completeTodo', this.todo)
    },
    importantTodo() {
      this.$store.dispatch('importantTodo', this.todo)
    }
  }
}
</script>

<style>

</style>