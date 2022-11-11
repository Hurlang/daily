<template>
  <div>
    {{ size.name }} - {{ size.price }}
  </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props:{
    size: Object,
  },
  methods: {
    sizeSelect() {
      this.$store.dispatch('sizeSelect', this.size)
    }
  }
}
</script>

<style>

</style>