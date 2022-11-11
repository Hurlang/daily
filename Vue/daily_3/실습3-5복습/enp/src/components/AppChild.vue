<template>
  <div id="AppChild">
    <h1>AppChild</h1>
    <input type="text" @keyup.enter="onChildInput">
    <p>appData: {{appData}}</p>
    <p>parentData: {{parentData}}</p>
    <p>childpData: {{childData}}</p>
  </div>
</template>

<script>
export default {
  name: 'AppChild',
  props: {
    appData: String,
    parentData: String,
    childData: String,

  },
  methods: {
    onChildInput(event){
      this.$emit('child-input', event.target.value)
    }
  }
}
</script>

<style>
</style>