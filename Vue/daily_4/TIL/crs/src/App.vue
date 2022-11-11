<template>
  <div id="app" class="container">
    <h1>SSAFY 상담 예약 시스템</h1>
    <div class="row">
      <TimeTable @confirm="onConfirm"/>
      <MyList :teacher="teacher" :time="time"/>
    </div>
  </div>
</template>

<script>
import TimeTable from '@/components/TimeTable'
import MyList from '@/components/MyList'
export default {
  name: 'App',
  components: {
    TimeTable,
    MyList,
  },
  data: function(){
    return{
      teacher: null,
      time: [],
    }
  },
  methods: {
    onConfirm(teacher, time){
      this.teacher = teacher
      this.time = time
    }
  }
}
</script>

<style>
#app {
  font-family: 'Noto Sans KR', sans-serif;
  font-family: 'Poor Story', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
