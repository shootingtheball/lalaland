<template>
  <div class="detail">
      <div class="back" @click="back"><span><</span> 返回</div>
      <div class="text">
          <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
  </div>
</template>

<script>
export default {
  methods:{
      back() {
          this.$router.push({
              path:'/prepare'
          })
      }
  }
}
</script>


<style lang="less" scoped>
  .detail{
      padding: 30px 30px 0 30px;
      height: 800px;
      background: #fff;
      .back{
          height: 20px;
          line-height: 20px;
          span{
              vertical-align: 1px;
          }
      }
      .text{
          margin-top: 20px;
          textarea{
              width: 100%;
              height: 300px;
              background: #F5F5F5;
              border: 0;
          }
      }
  }
</style>
