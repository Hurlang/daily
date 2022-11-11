<template>
  <div>
    <span>{{size.name}}</span> <span>{{size.price}}원</span>
  </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
}
</script>

<style>
</style>