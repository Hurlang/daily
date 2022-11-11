<template>
  <div class="col-4 size-list d-flex flex-column align-items-center bg-white rounded py-2">
    <h2>2. 사이즈를 고르세요.</h2>
    <div
      class="d-flex justify-content-between w-75 border border-dark rounded p-3 m-2" 
      :class="{selected:size.selected}"
      v-for="(size, sizeIndex) in sizeList"
      :key="sizeIndex"
      @click="onSelectMenu(sizeIndex)"
    >
    <SizeListItem
      :size="size"
    />
    </div>
  </div>
</template>

<script>
import SizeListItem from '@/components/SizeListItem'
export default {
  name: 'SizeList',
  components: {
    SizeListItem,
  },
  methods: {
    onSelectMenu(sizeIndex) {
      this.$store.commit('updateSizeList', sizeIndex)
    },
  },
  computed: {
    sizeList() {
      return this.$store.state.sizeList
    },
  },
}
</script>

<style>
</style>