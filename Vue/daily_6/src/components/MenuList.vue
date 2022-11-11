<template>
  <div class="col-4 menu-list d-flex flex-column align-items-center bg-white rounded py-2">
    <h2>1. 음료를 고르세요.</h2>
    <div 
      class="border border-dark rounded w-75 d-flex  justify-content-between align-items-center p-2 m-1" 
      :class="{selected:menu.selected}"
      v-for="(menu, menuIndex) in menuList" 
      :key="menuIndex" @click="selectMenu(menuIndex)"
    >
    <MenuListItem
      :menu="menu"
    />
    </div>
  </div>
</template>

<script>
import MenuListItem from '@/components/MenuListItem'
export default {
  name: 'MenuList',
  components: {
    MenuListItem,
  },
  computed: {
    menuList() {
      return this.$store.state.menuList
    },
  },
  methods: {
    selectMenu(menuIndex) {
      this.$store.commit('updateMenuList', menuIndex)  
          
    },
  },
}
</script>

<style>

</style>