<template>
  <div>
    <input
      type="text"
      v-model.trim="inputData"
      @keyup.enter="onInputData"
    >
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      inputData: null,
    }
  },
  methods: {
    onInputData() {
      if (this.inputData === null || this.inputData === ''){
        alert('입력값이 없습니다!')
      } else {
        this.$store.dispatch('onInputData', this.inputData)
        this.inputData = null
      }
    }
  }
}
</script>

<style>

</style>