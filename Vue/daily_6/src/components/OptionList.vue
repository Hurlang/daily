<template>
  <div class="col-3 d-flex flex-column align-items-center bg-white rounded py-2">
    <h2>3. 옵션을 고르세요.</h2>
    <ul class="option-list w-75 m-0 p-0 align-items-center py-2">
      <li
        v-for="(option, optionIndex) in optionList"
        :key="optionIndex"
      >
        <OptionListItem
          :option="option"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import OptionListItem from '@/components/OptionListItem'
export default {
  name: 'OptionList',
  components: {
    OptionListItem
  },
  computed: {
    optionList() {
      return this.$store.state.optionList
    },
  },
}
</script>

<style>
</style>