<template>
  <div>
    <h2>Size List</h2>
    <SizeListItem
      v-for="(size, sizeIndex) in sizeList"
      :key="sizeIndex"
      :size="size"
      @click="sizeSelect"
    />
  </div>
</template>

<script>
import SizeListItem from '@/components/SizeListItem'
export default {
  name: 'SizeList',
  components: {
    SizeListItem,
  },
  props: {
    sizeList: Object,
  },
  
}
</script>

<style>

</style>