<template>
  <div>
    <h1>App Parent</h1>
    <input type="text" v-model="parentData">
    <p>appData:{{appData}}</p>
    <p>childData:{{childData}}</p>
    <AppChild :appData="appData" :parentData="parentData" @child-input="childInput"/>
  </div>
</template>

<script>

import AppChild from '@/components/AppChild'
export default {
  name: 'AppParent',
  components: {
    AppChild,
  },
  props: {
    appData: String,
    childData: String,
  },
  data: function(){
    return {
      parentData: null,
    }
  },
  methods: {
    childInput: function(childInput){
      this.$emit('child-input',childInput)
      this.childData = childInput
    }
  }
}
</script>

<style>

</style>