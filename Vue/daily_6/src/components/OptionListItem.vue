<template>
  <div class="border border-dark rounded w-100 d-flex justify-content-between align-items-center p-3 m-2">
    <div>
      <span>{{ option.type }}</span>
    </div>
    <div>
      <button
        style="width:25px; height:25px" 
        class="rounded-circle"
        @click="decrease(option)"
      >-</button>
      <span> {{ option.count }} </span>
      <button
        style="width:25px; height:25px" 
        class="rounded-circle"
        @click="increase(option)"
      >+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionListItem',
  props: {
    option: Object,
  },
  methods: {
    increase(option) {
      this.$store.commit('increase', option)
    },
    decrease(option) {
      this.$store.commit('decrease', option)
    },
  },
}
</script>

<style>
</style>