<template>
  <div id="AppParent">
    <h1>AppParent</h1>
    <input type="text" @keyup.enter="onParentInput">
    <p>appData: {{appData}}</p>
    <p>childData: {{childData}}</p>
    <AppChild
      :appData="appData"
      :parentData="parentData"
      :childData="childData"
      @child-input="onChildInput"
    />
  </div>
</template>

<script>
import AppChild from '@/components/AppChild'
export default {
  name: 'AppParent',
  components:{
    AppChild,
  },
  props: {
    appData: String,
    parentData: String,
    childData: String,
  },
  methods: {
    onChildInput(childInput){
      this.$emit('child-input', childInput)
    },
    onParentInput(event){
      this.$emit('parent-input', event.target.value)
    }
  }
}
</script>

<style>
  
</style>