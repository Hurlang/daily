<template>
  <div id="app">
    <h1>App</h1>
    <input type="text" v-model="appData">
    <p>parentData: {{parentData}}</p>
    <p>childData: {{childData}}</p>
    <AppParent :appData="appData" :childData="childData" @child-input="childInput"/>
  </div>
</template>

<script>
import AppParent from '@/components/AppParent'

export default {
  name: 'App',
  components: {
    AppParent,
  },
  data: function(){
    return {
      appData: null,
      childData: null,
    }
  },
  methods: {
    childInput: function(childInput){
      this.childData = childInput
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
