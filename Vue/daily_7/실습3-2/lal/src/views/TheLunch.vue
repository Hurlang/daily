<template>
  <div>
    <h1>점심메뉴</h1>
    <button
      @click="pickLunch"
    >Pick Lunch</button>
    <p>{{ menu }}</p>

    <h2>로또를 뽑아보자</h2>
    <button
      @click="goToLotto"
    >Pick Lotto</button>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'TheLunch',
  data (){
    return {
      menu: null
    }
  },
  methods:{
    pickLunch() {
      const lunchList = ['국밥', '피자', '삼겹살', '김치찌개', '해물아구찜']
      this.menu = _.sample(lunchList) 
    },
    goToLotto() {
      this.$router.push({name: 'lotto'})
    }
  }
}
</script>

<style>

</style>