<template>
  <li>
    <div class="row ps-2">
      <div class="row justify-content-between">
        <img style="width:50px; height:50px" :src=order.menu.image alt="" class="rounded p-0">
        <div class="col">
          <span>{{ order.menu.title }}</span>
          <span>사이즈: {{ order.size.name }}</span>
        </div>

        <div class="col">
          <p>가격: {{totalPrice}}</p>
          <p>샷: {{ order.option[0].count }}회| 바닐라 시럽 {{ order.option[1].count }}회|카라멜 시럽 {{ order.option[2].count }}회</p>
        </div>
      </div>
      
    </div>
    <hr>
  </li>
</template>

<script>
export default {
  name: 'OrderListItem',
  props: {
    order: Object,
  },
  computed: {
    totalPrice() {
      console.log(this.order)
      return [this.order].reduce((total, o) => {
        return total + o.menu.price + o.size.price
        + o.option[0].price * o.option[0].count
        + o.option[1].price * o.option[1].count
        + o.option[2].price * o.option[2].count
      } ,0)
    }
  }
}
</script>

<style>
</style>