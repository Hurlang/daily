<template>
  <div id="app">
    <h1>App</h1>
    <input type="text" v-model="appData">
    <p>parentData: {{parentData}}</p>
    <p>childData: {{childData}}</p>
    <AppParent
      :appData="appData"
      :parentData="parentData"
      :childData="childData"
      @child-input="onChildInput"
      @parent-input="onParentInput"
    />
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
      parentData: null,
      childData: null,
    }
  },
  methods: {
    onChildInput(childInput){
      this.childData = childInput
    },
    onParentInput(parentInput){
      this.parentData = parentInput
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
#AppParent{
  border: 1px solid red;
}
#AppChild {
  border: 1px solid blue;
}
</style>
