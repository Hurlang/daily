<template>
  <div 
    style="background: #f3f4f6" 
    class="container vw-100 rounded py-4 col"
  >
    <h2 class="text-left p-2">주문 내역</h2>
    <p class="text-left p-2">총 {{ totalOrderCount }}건: {{ totalOrderPrice }}원</p>
    <OrderListItem
      v-for="(order, orderIndex) in orderList"
      :key="orderIndex"
      :order="order"
    />
  </div>
</template>

<script>
import OrderListItem from '@/components/OrderListItem'
export default {
  name: 'OrderList',
  components: {
    OrderListItem,
  },
  computed: {
    orderList() {
      return this.$store.state.orderList
    },
    totalOrderCount() {
      return this.$store.getters.totalOrderCount
    },
    totalOrderPrice() {
      return this.$store.getters.totalOrderPrice
    },
  },
}
</script>

<style>
</style>