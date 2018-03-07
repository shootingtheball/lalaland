<template>
  <div class="layout">
      <Navbar></Navbar>
      <div class="main-contain">
          <Sidebar></Sidebar>
          <app-main></app-main>
      </div>
  </div>
</template>


<script>
import { Navbar, Sidebar, AppMain } from './components'

export default {
  components:{
      Navbar,
      Sidebar,
      AppMain
  }
}
</script>


<style lang="less" scoped>
  .layout{
      padding-top: 45px;
      height: 100%;
      .main-contain{
          position: relative;
          margin:0 auto;
          width:60%;
         // border: 1px solid #6df4f4;

      }
  }
</style>
