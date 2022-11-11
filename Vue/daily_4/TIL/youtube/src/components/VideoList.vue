<template>
  <ul>
    <VideoListItem
      v-for= "(video, index) in videos"
      :key= "index"
      :video="video"
      @select-video="onSelectVideo"
    >
    
    </VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from '@/components/VideoListItem'
export default {
  name: 'VideoList',
  components: {
    VideoListItem,
  },
  props: {
    videos: Array,
  },
  methods: {
    onSelectVideo(video){
      this.$emit('select-video', video)
    }
  }
}
</script>

<style>

</style>