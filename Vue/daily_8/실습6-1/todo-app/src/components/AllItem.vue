<template>
  <div>
    <div
      class="d-flex row justify-between item_skin m inner_p"
      @click="updateForm(todo.id)"
    >
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
    <div
      :ref = todo.id
      :data-id = "todo.id"
      class="updateForms invisible col d-flex item_skin m ">
      <div class="">
        <button
          class="item_skin updateBtn"
          @click="updateTodo"
        >수정하기</button>
      </div>
      <div>
        <input class="item_skin" type="text" v-model="content">
      </div>
      <div>
        <input class="item_skin" type="datetime-local" v-model="dueDateTime">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllItem',
  props: {
    todo: Object,
  },
  data() {
    return {
      content: null,
      dueDateTime: null,
    }
  },
  methods: {
    completeTodo() {
      this.$store.dispatch('completeTodo', this.todo)
    },
    importantTodo() {
      this.$store.dispatch('importantTodo', this.todo)
    },
    updateForm(id) {
      const updateForms = document.querySelectorAll('.updateForms')
      let updateForm = null
      for(const form of updateForms){
        if (Number(form.dataset.id) === Number(id)){
          updateForm = form
        }
      }
      updateForm.classList.toggle('invisible')
      this.content = this.todo.content
    },
    updateTodo() {
      const todo = {
        id: this.todo.id,
        content: this.content,
        dueDateTime: this.todo.dueDateTime,
        isCompleted: this.todo.isCompleted,
        isImportant: this.todo.isImportant,
      }
      this.$store.dispatch('updateTodo', todo)

      this.$refs[`${todo.id}`].classList.toggle('invisible')
    }
  }
}

</script>

<style>

</style>