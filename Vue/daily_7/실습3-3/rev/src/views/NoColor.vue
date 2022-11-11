<template>
  <div class="box">
    <h2>시작</h2>
    <div class="imgBox">
      <img 
        src="../assets/chevron_left.png" alt="."
        @click="goPrev"
      >
      <img src="../assets/happeed.png" alt=".">
      <img
        src="../assets/chevron_right.png" alt="."
        @click="goNext"
      >
    </div>
    <h2>싸피드</h2>
  </div>
</template>

<script>
export default {
  name: 'NoColor',
  methods: {
    goPrev() {
      this.$router.push({name: 'home'})
    },
    goNext() {
      this.$router.push({name: 'ssafling'})
    }
  }
}
</script>

<style>

</style>