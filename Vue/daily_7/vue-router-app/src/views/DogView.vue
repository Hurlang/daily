<template>
  <div>
    <h1>DogView</h1>
    <p v-if="!imgSrc">{{ message }}</p>
    <img :src=imgSrc alt="">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DogView',
  data() {
    return{
      imgSrc : null,
      message: '로딩중...',
    }
  },
  methods: {
    getDogImg(){
      const breed = this.$route.params.breed
      const dogImageUrl = `https://dog.ceo/api/breed/${breed}/images/random`
      axios({
        method: 'get',
        url: dogImageUrl,
      })
        .then(res => {
          console.log(res)
          const imgSrc = res.data.message
          this.imgSrc = imgSrc
        })
        .catch(err => {
          // this.message = `${this.$route.params.breed}는 없는 품종입니다.`
          this.$router.push('/404')
          console.log(err)
        })
    }
  },
  created() {
    this.getDogImg()
  }
}
</script>

<style>

</style>