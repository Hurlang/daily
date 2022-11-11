<template>
  <div id="app" >
    <h1 class="title" @click="onSetVideo">SSAFY TUBE</h1>
    <iframe width="720" height="480" :src="videoUrl" frameborder="0"></iframe>
    <br>
    <div class="border">{{ this.video }}</div>
  </div>
</template>

<script>
import axios from 'axios'
const API_KEY = 'AIzaSyD6SLQvokcIgX32v_1wUaubI25fhmmv6eY'
const API_URL = 'https://www.googleapis.com/youtube/v3/search'
export default {
  name: 'App',
  components: {
  },
  data: function(){
    return{
      video: null,
      videoUrl: null,
    }
  },
  methods: {
    onSetVideo(){
      const params = {
        key: API_KEY,
        part: 'snippet',
        type: 'video',
        q: '코딩노래',
      }

      axios({
        method: 'get',
        url: API_URL,
        params,
      })
      .then( res => {
        // console.log(res.data.items[0].snippet.title)
        const videoId = res.data.items[0].id.videoId
        this.video = res.data.items[0].snippet.title
        this.videoUrl = `https://www.youtube.com/embed/${videoId}`
      })
      .catch( err => {
        console.log(err)
      })
    }
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
.title {
  color : blue;
}
</style>
