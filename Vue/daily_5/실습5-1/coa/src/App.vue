<template>
  <div id="app">
    <OrderList
      :oderList="orderList"
    />
    <MenuList
      :menuList="menuList"
    />
    <SizeList
      :sizeList="sizeList"
    />
  </div>
</template>

<script>
import OrderList from '@/components/OrderList'
import MenuList from '@/components/MenuList'
import SizeList from '@/components/SizeList'
export default {
  name: 'App',
  components: {
    OrderList,
    MenuList,
    SizeList,
  },
  computed: {
    orderList(){
      return this.$store.state.orderList
    }, 
    menuList(){
      return this.$store.state.menuList
    }, 
    sizeList(){
      return this.$store.state.sizeList
    }, 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
