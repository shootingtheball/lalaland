<template>
  <div class="login">
      <div class="main">
        <div class="option">
          <div class="main2">
            <div class="taggle" @click="taggle($event)">
              <div :class="{choosen:active}" id="train">实训系统</div>
              <div :class="{choosen:!active}" id="operate">业务运营系统</div>
            </div>
            <div class="entering">
              <div class="account"><input type="text" name=""  v-model="account"></div>
              <div class="password"><input type="password" name="" v-model="password"></div>
            </div>
            <div class="btn" @click="vlogin">登录</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {login} from '@/api/index.js'

export default {
  data() {
    return {
      active:true,
      account:'',
      password:''
    }
  },
  methods:{
    taggle(event) {
      if(event.target.id ==='train'){
        this.active =true;
      }else {
        this.active=false
      }
    },
    vlogin() {
      let param = {
        mobile:this.account,
        password:this.password,
        verifyCode:1234,
        type:'MOBILE_PASSWORD'
      }
      login(param).then(res => {
        if(res.data.code==='2000'){
          let data = res.data.data;
          data.account = this.account;
          this.$store.commit('CHANGE_TOKEN',data)
          this.$router.push({path:'/homepage'});
        }
      })
    }
  }
}
</script>


<style lang="less" scoped>
  .login{
     position: fixed;
     background: url('../../assets/icon/background.png');
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
      .main{
          position: absolute;
          left: 50%;
          top: 50%;
          width: 85%;
          height: 85%;;
          transform: translate(-50%,-50%);
          background: url('../../assets/icon/background2.png');
          background-size: 100% 100%;
          box-shadow: 5px 5px 15px #868686;
          .main2{
            position: absolute;
            top: 48%;
            transform: translate(0,-50%);
            width: 100%;

          }
          .option{
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 70%;
            background: #fff;
            .taggle{
              font-weight: bold;
              display: flex;
              justify-content: space-around;
              padding: 0 30px;
              margin-bottom: 40px;
              & >div{
                flex: 1;
                color: #acacac;
                display: inline-block;
                font-size: 20px;
                border-bottom: 2px solid #acacac;
                text-align: center;
              }
              .choosen{
                color: #000;
                border-color: #3a5ddf
              }
            }
          }
          .entering{
            margin-bottom: 70px;
            .account,.password{
              border-bottom: 1px solid #aeaeae;
              height: 35px;
              width: 65%;
              margin: 0 auto;
              padding: 0 10px;
              margin-bottom: 10px;
              input{
                height: 100%;
                width: 95%
              }
            }
          }
          .btn{
            background: #3a5ddf;
            margin: 0 auto;
            color: #fff;
            width: 170px;
            font-weight:lighter; 
            text-align: center;
            height: 37px;
            line-height: 37px
          }
      }
  }
</style>
