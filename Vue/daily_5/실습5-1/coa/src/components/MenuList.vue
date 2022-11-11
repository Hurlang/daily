<template>
  <div>
    <h2>Menu List</h2>
    <MenuListItem
      v-for="(menu, menuIndex) in menuList"
      :key="menuIndex"
      :menu="menu"
    />
  </div>
</template>

<script>
import MenuListItem from '@/components/MenuListItem'
export default {
  name: 'MenuList',
  components:{
    MenuListItem,
  },
  props: {
    menuList: Object,
  }
}
</script>

<style>

</style>