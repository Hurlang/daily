<template>
  <div>
    {{ menu.title }} - {{ menu.price }}
  </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  }
}
</script>

<style>

</style>