<template>
  <div class="navbar">
    <div class="main">
      <div class="logo" @click="goto"><img src="./../assets/icon/logo.png" alt=""></div>
      <div class="title">Q学伴作业辅导系统</div>
      <div class="logout" @click="signout">退出</div>
      <div class="tel">{{account}}</div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goto() {
       return this.$router.push({path:'/homepage'})
    },
    signout() {
      this.$store.commit('USER_SIGNOUT');
      this.$router.push({path:'/login'})
    }
  },
   computed:{
      account() {
        return this.$store.state.account
      }
    }
  
}
</script>

<style lang="less" scoped>
  .navbar{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
    background: #4B4B4B;
    height:45px ;
      .main{
        width: 50%;
        margin: 0 auto;
        height: 100%;
        .logo{
          height: 100%;
          img{
            height: 80%
          }
        }
        div{
          display: inline-block;
          font-size: 16px;
          line-height: 45px;
          color: #fff
        }
        .tel{
          background: #2A58AD;
          float: right;
          margin-right: 15px
        }
        .logout{
          float: right;
        }
      }
  }
</style>
