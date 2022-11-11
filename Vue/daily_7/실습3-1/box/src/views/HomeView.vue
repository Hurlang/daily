<template>
  <div class="home">
    <h1>Home</h1>
    <h2>첫 번째 박스</h2>
    <div class="global">
      <div class="box scoped-box"></div>
    </div>
    <h2>두 번째 박스</h2>
    <div class="global">
      <div class="box scoped-box"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style>
.global{
  width: 100px;
  height: 100px;
  background: pink;
  border: 1px solid black;
  margin:auto;
}
</style>