<template>
  <div>
    <img style="width:50px; height:50px" :src=menu.image class="rounded">
    <span>{{menu.title}}</span>
    <span>{{menu.price}}원</span>
  </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
}
</script>

<style>
  
</style>