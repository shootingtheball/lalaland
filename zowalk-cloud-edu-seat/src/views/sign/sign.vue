<template>
  <div class="sign">
      <navbar></navbar>
      <div class="cal">
          <calendar></calendar>
      </div>
  </div>
</template>


<script>
import calendar from '@/common/calendar'
import navbar from '@/common/navbar'

export default {
  components:{
      calendar,navbar
  }
}
</script>

<style lang="less" scoped>
  .sign{
      padding-top: 45px;
      .cal{
          width:50%;
          margin: 0 auto;
          margin-top: 20px;
      }
  }
</style>

