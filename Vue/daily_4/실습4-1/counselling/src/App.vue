<template>
  <div id="app">
    <h1>버튼 박스 제작</h1>
    <div style="border: 1px solid black">
      <h2>예약페이지</h2>
      <h3>시간 선택</h3>
      <br>
      <div class="container">
        <div class="row">
          <div v-for="(time, idx) in times" :key="idx" class="col-2 timeboard" @click="onSelect(idx)" :id="`${idx}`">
            {{ time }}
          </div>
        </div>
      </div>
      <hr>
      <p>선택 시간 : {{ selected.join('     ') }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function(){
    return{
      selected: [],
      times: [
        "09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30",
        "14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30",
        "19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30",
      ],
    }
  },
  methods: {
    onSelect(idx){
      console.log(idx)
      const divs = document.querySelectorAll('.timeboard')
      
      
      if(this.selected.length < 5){
        divs[idx].classList.toggle('select')
        if(this.selected.indexOf(divs[idx].innerHTML) === -1){
          this.selected.push(divs[idx].innerHTML)
        }
        else{
          console.log(this.selected[0])
          this.selected.splice(this.selected.indexOf(divs[idx].innerHTML), 1)
        }
      }
      else{
        alert('5타임까지만 신청할 수 있습니다.')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.select {
  background: skyblue;
  color: blue;
}
</style>
