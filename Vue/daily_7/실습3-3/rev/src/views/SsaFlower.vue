<template>
  <div class="box">
    <h2>3단계</h2>
    <div class="imgBox">
      <img 
        src="../assets/chevron_left.png" alt="."
        @click="goPrev"
      >
      <img src="../assets/happlower.png" alt=".">
      <img
        src="../assets/chevron_right.png" alt="."
        @click="goNext"
      >
    </div>
    <h2>싸플라워</h2>
  </div>
</template>

<script>
export default {
  name: 'SsaFlower',
  methods: {
    goPrev() {
      alert('이전 진화 단계로 돌아갈 수 없습니다.')
    },
    goNext() {
      alert('Home으로 돌아갑니다.')
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style>

</style>