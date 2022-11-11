<template>
  <div class="container row">
    <div class="col-6">
      <input type="text" v-model="inputKeyward" class="form-control col-3">
    </div>
    <button @click="clickSearch" class="btn btn-primary col-2">검색</button>
  </div>
</template>

<script>
export default {
  name: 'TheSearchBar',
  data: function(){
    return {
      inputKeyward: null,
    }
  }
  ,
  methods: {
    clickSearch(){
      // console.log(event.target.value)
      this.$emit('input-change', this.inputKeyward)
      this.inputKeyward = null
    },
  }
}
</script>

<style>

</style>