<template>
  <div>
    <h1>로또</h1>
    <button
      @click="getLuckyNumbers"
    >Get Lucky Numbers</button>
    <p>{{ LuckyNumbers }}</p>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'TheLotto',
  data() {
    return {
      LuckyNumbers: null
    } 
  },
  methods: {
    getLuckyNumbers() {
      const Numbers = _.range(1,46)
      console.log(Numbers)
      this.LuckyNumbers = _.sampleSize(Numbers, 6)
    }
  }
}
</script>

<style>

</style>