<template>
  <div class="box">
    <h2>2단계</h2>
    <div class="imgBox">
      <img 
        src="../assets/chevron_left.png" alt="."
        @click="goPrev"
      >
      <img src="../assets/happlossome.png" alt=".">
      <img
        src="../assets/chevron_right.png" alt="."
        @click="goNext"
      >
    </div>
    <h2>싸플리프</h2>
  </div>
</template>

<script>
export default {
  name: 'SsaFleaf',
  methods: {
    goPrev() {
      alert('이전 진화 단계로 돌아갈 수 없습니다.')
    },
    goNext() {
      this.$router.push({name: 'ssaflower'})
    }
  }
}
</script>

<style>

</style>