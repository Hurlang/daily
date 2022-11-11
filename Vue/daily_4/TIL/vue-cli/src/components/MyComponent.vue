<template>
  <div>
    <h1>This is my component</h1>
    <MyChild
      static-props="MyComponent->MyChild"
      :dynamic-props="dynamicProps"
      @child-to-parent="parentGetEvent"
      @child-input="getDynamicData"
    />
  </div>
</template>

<script>
import MyChild from '@/components/MyChild'
export default {
  name: 'MyComponent',
  components: {
    MyChild,
  },
  data: function(){
    return {
      dynamicProps: "It's in data..."
    }
  },
  methods: {
    parentGetEvent(childData){
      console.log('자식에서 발생한 이벤트', childData)
    },
    getDynamicData(childData){
      console.log('자식에서 입력한 동적데이터', childData)
    }
  }
}
</script>

<style>

</style>