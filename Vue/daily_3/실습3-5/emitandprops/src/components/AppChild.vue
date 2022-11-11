<template>
  <div>
    <h1>AppChild</h1>
    <input type="text" v-model="childData" @input="childInput">
    <p>appData: {{appData}}</p>
    <p>parentData: {{parentData}}</p>
    <p>childData: {{childData}}</p>
  </div>
</template>

<script>
export default {
  name: 'AppChild',
  props: {
    appData: String,
    parentData: String,
  },
  data: function(){
    return {
      childData: null,
    }
  },
  methods: {
    childInput: function(){
      this.$emit('child-input', this.childData)
    }
  }
}
</script>

<style>

</style>