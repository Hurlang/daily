<template>
  <div id="app" class="d-flex flex-column justify-center align-center">
    <h1>진화 단계 가이드</h1>
    <div class="d-flex row w300px justify-evenly">
      <div
        class="border-yellow bg-yellow p m"
        @click="goHome"
      >Home</div>

      <div
        class="border-yellow bg-yellow p m"
        @click="goStart"
      >Start</div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    goHome() {
      this.$router.push({name: 'home'})
    },
    goStart() {
      this.$router.push({name: 'nocolor'})
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.imgBox {
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgBox :nth-child(1) {
  width: 50px;
  height: 50px;
}
.imgBox :nth-child(2) {
  width: 300px;
  height: 300px;
}
.imgBox :nth-child(3) {
  width: 50px;
  height: 50px;
}
.box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 1em;
  width: 600px;
  height: 600px;
}

.d-flex{
  display: flex;
}
.flex-column{
  flex-direction: column;
}
.justify-center{
  justify-content: center;
}
.align-center{
  align-items: center;
}
.row {
  flex-direction: row;
}
.w300px{
  width: 300px;
}
.justify-between{
  justify-content: space-between;
}
.justify-evenly{
  justify-content: space-evenly;
}
.border-yellow{
  border: 1px solid #f1a324;
}
.bg-yellow:hover{
  background-color: #f7e43a;
}
.p{
  padding: 1rem 1.5rem;
}
.m{
  margin: 1rem;
}
</style>

