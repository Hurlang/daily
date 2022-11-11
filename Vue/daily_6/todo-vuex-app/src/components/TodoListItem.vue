<template>
  <div class="todo-box">
    <p
      @click="onComplete"
      :class="{'done':todo.isCompleted}"
    >{{ todo.title }}
    <span
      @click="deleteTodo"
      class="delBtn"
    >x</span>
    </p>

    
    
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    onComplete(){
      this.$store.dispatch('onComplete', this.todo)
    },
    deleteTodo(){
      this.$store.dispatch('deleteTodo', this.todo)
    }
  }
}
</script>

<style>
  .delBtn {
    display: none;
  }
  .done{
    text-decoration: line-through;
    color: gray;
  }
  p:hover {
    font-weight: bolder;
  }
  p:hover > span {
    display: inline-block;
    color : red;
  }
  
</style>