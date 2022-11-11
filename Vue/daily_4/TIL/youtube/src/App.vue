<template>
  <div id="app">
    <h1>Youtube Project</h1>
    <header>
      <TheSearchBar
        @input-change="onInputChange"
      />
    </header>
    <hr>
    
    <section>
      <VideoDetail
        :video="selectedVideo"
      />
      <VideoList
        :videos="videos"
        @select-video="onSelectVideo"
      />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import TheSearchBar from '@/components/TheSearchBar'
import VideoDetail from '@/components/VideoDetail'
import VideoList from '@/components/VideoList'

const API_KEY = 'AIzaSyD6SLQvokcIgX32v_1wUaubI25fhmmv6eY'
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
  name: 'App',
  components: {
    TheSearchBar,
    VideoDetail,
    VideoList,
  },
  data: function(){
    return {
      inputValue: null,
      videos: [],
      selectedVideo: null,
    }
  }
  ,
  methods: {
    onInputChange(inputData){
      // console.log(inputData)
      this.inputValue = inputData
      
      const params = {
        key: API_KEY,
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        q: this.inputValue
      }

      axios({
        method: 'get',
        url: API_URL,
        params,
      })
      .then(res => {
        // console.log(res.data.items)
        this.videos = res.data.items
      })
      .catch(err =>{
        console.log(err)
      })
    },

    onSelectVideo(video){
      this.selectedVideo = video
      // console.log(this.selectedVideo)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
