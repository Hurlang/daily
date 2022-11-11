<template>
  <div id="app" class="container d-flex flex-column justify-content-center align-items-center">
    <h1>Coffee Order App</h1>
    <div style="background:#f3f4f6" class="rounded container row m-3 p-3 gap-4 justify-content-evenly">
      <MenuList/>
      <SizeList/>
      <OptionList/>
    </div>
    <button
      class="btn btn-success w-100"
      @click="updateOrderList"
    >장바구니 담기</button>
    <div style="background:#f3f4f6" class="rounded container row m-3 p-3 gap-4 justify-content-evenly">
      <OrderList/>
    </div>
  </div>
</template>

<script>
import MenuList from '@/components/MenuList'
import OptionList from '@/components/OptionList'
import OrderList from '@/components/OrderList'
import SizeList from '@/components/SizeList'
export default {
  name: 'App',
  components: {
    MenuList,
    OptionList,
    OrderList,
    SizeList,
  },
  methods: {
    updateOrderList() {
      this.$store.commit('updateOrderList')
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}

li {
  list-style: none;
}

.selected{
    background: #198754;
    color: white;
  }
</style>
