<template>
  <div>
    <h1>This is child component</h1>
    <p>{{ staticProps }}</p>
    <p>{{ dynamicProps }}</p>
    <button @click="ChildToParent">클릭</button>
    <input 
      type="text"
      v-model="childInputData"
      @keyup.enter="childInput"
    >
  </div>
</template>

<script>
export default {
  name: 'MyChild',
  props: {
    staticProps: String,
    dynamicProps: String,
  },
  data: function(){
    return {
      childInputData: null,
    }
  }
  ,
  methods: {
    ChildToParent(){
      this.$emit('child-to-parent', 'data')
    },
    childInput(){
      this.$emit('child-input', this.childInputData)
      this.childInputData = null
    }

  }
}

</script>

<style>

</style>