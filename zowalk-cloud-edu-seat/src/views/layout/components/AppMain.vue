<template>
  <div class="appmain">
      <transition name="fade">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  
}
</script>


<style lang="less" scoped>
  .appmain{
    position: absolute;
    padding: 10px;
    width: 70%;
    left: 18vw;
    height:900px;
  }
</style>
