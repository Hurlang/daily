<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{ name:'Home' }">홈으로!</router-link>
    <button @click="toHome">홈으로!</button>
    <input
      type="text"
      v-model="inputData"
      @keyup.enter="toHello"
    >
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      inputData: null,
    }
  },
  methods: {
    toHome() {
      this.$router.push({ name:'Home' })
    },
    toHello() {
      this.$router.push({ name:'hello', params:{ userName: this.inputData }})
    }
  }
}
    
</script>
<style>
  nav a.router-link-exact-active {
  color: #42b983;
}
</style>
