<template>
  <div class="col-6">
    <h2>예약페이지</h2>
    <br>
    <h3>선생님 선택</h3>
    <div class="text-center mx-5 d-flex justify-content-center">
      <div class="mx-2 p-1 px-4 d-inline border border-primary" :id="`teacher-${1}`" @click="onSelectTeacher(1)">Eric</div>
      <div class="mx-2 p-1 px-4 d-inline border border-primary" :id="`teacher-${2}`" @click="onSelectTeacher(2)">Tony</div>
    </div>
    <hr>
    <h3>시간 선택</h3>
    <div class="row">
      <div class="col-2 timeTable" v-for="(time, index) in times" :key="index" :id="index" @click="onSelectTime(index)">
        {{ time }}
      </div>
    </div>
    <div class="mx-2 p-1 px-4 d-inline border border-primary confirm" @click="onClickConfirm">예약확정</div>
    
  </div>
</template>

<script>
export default {
  name: 'TimeTable',
  data: function(){
    return {
      times: [
        "09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30",
        "14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30",
        "19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30",
      ],
      teacher: null,
      time: [],
    }
  },
  methods: {
    onSelectTeacher(id){
      const Eric = document.querySelector('#teacher-1')
      const Tony = document.querySelector('#teacher-2')
      Eric.classList.remove('select')
      Tony.classList.remove('select')

      this.time = []

      const timeTable = document.querySelectorAll('.timeTable')
      for (const t of timeTable) {
        t.classList.remove('select')
      }

      const selectedTeacher = document.querySelector(`#teacher-${id}`)
      this.teacher = selectedTeacher.innerHTML
      selectedTeacher.classList.add('select')
    },

    onSelectTime(index){
      const timeTable = document.querySelectorAll('.timeTable')
      const selectTimeBox = timeTable[index]
      const selectedTime = timeTable[index].innerHTML
      const selectedTimeIndex = this.time.indexOf(selectedTime)
      
      if(this.time.length < 5){
        if(selectedTimeIndex === -1){
          this.time.push(selectedTime)
          selectTimeBox.classList.add('select')
        } else {
          this.time.splice(selectedTimeIndex, 1)
          selectTimeBox.classList.remove('select')
        }
      } else {
        if(selectedTimeIndex !== -1){
          this.time.splice(selectedTime, 1)
          selectTimeBox.classList.remove('select')
        } else {
          alert('5타임까지만 신청할 수 있습니다')
        }
      }
    },

    onClickConfirm(){
      if(!this.teacher){
        alert('선생님을 선택해 주세요!')
      } else if(this.time.length !== 5){
        alert('시간을 선택해 주세요!')
      } else {
        this.$emit('confirm', this.teacher, this.time)
        
        const timeTable = document.querySelectorAll('.timeTable')
        for( const t of timeTable){
          t.classList.remove('select')
        }

        const Eric = document.querySelector('#teacher-1')
        const Tony = document.querySelector('#teacher-2')
        Eric.classList.remove('select')
        Tony.classList.remove('select')

        this.time = []
        this.teacher = null

      }
    },
  },
}
</script>

<style>
  .select{
    color: blue;
    background: skyblue;
  }

  .confirm:hover{
    color: blue;
    background: skyblue;
    cursor: pointer;
  }
</style>