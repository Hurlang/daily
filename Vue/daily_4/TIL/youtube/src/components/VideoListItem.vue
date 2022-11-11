<template>
  <li @click="selectVideo">
    <img :src="youtubeImageSrc" alt="image">
    <span>{{ video.snippet.title }}</span>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
    video: Object,
  },
  computed: {
    youtubeImageSrc: function(){
      return this.video.snippet.thumbnails.default.url
    }
  },
  methods: {
    selectVideo(){
      this.$emit('select-video', this.video)
    }
  }
}
</script>

<style>
  li:hover {
    color: blue;
    cursor: pointer;
  }
</style>