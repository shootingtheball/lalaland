<template>
  <div class="live">
      <navbar></navbar>
      <div class="main">
          <div class="bcg"></div>
          <!--<div class="progress"></div> -->
          <div class="newprogress">
              <ul>
                  <li>网络环境监测</li>
                  <li>摄像头监测</li>
                  <li>声音监测</li>
                  <li>电路电压监测</li>
                  <li>智能系统监测</li>
                  <li>监测完成</li>
                  <li>智能匹配加速</li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import navbar from'../../common/navbar.vue'

export default {
  components:{
      navbar
  },
  mounted() {
      let arr = document.getElementsByTagName('li');
      let arr2 = Array.from(arr);
      arr2.forEach((item,index) => {
          this.time(item,300*index)
      });
  },
  methods:{
      time(ele,t){
          let a = setTimeout(() => {
              ele.className += ' choose';
          },t)
      }
  }
}
</script>

<style lang="less" scoped>
  .live{
      .main{
        position: fixed;
        left: 50%;
        top: 52%;
        transform: translate(-50%,-50%);
        width: 800px;
        height: 600px;
        background: #fff;
        .bcg{
          height:80% ;
          background: url('../../assets/icon/livebcg.png');
          background-size: 100% ;
          background-repeat: no-repeat;
        }
        .progress{
            position: absolute;
            height: 13px;
            right: 10px;
            left: 10px;
            bottom: 0px;
            border-bottom-right-radius: 8px;
            border-top-right-radius: 8px;
            margin: 50px auto;
            background: #489dd6;
            animation: move 2s;
        }
        @keyframes move 
        {
            from {right: 700px}
            to {right: 10px}
        }
        .newprogress{
            margin-top: 5px;
            ul{
                display: flex;
                justify-content: space-around;
                li{
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    border: 1px solid #4c9fd7;
                    line-height: 100px;
                    text-align: center;
                    color: #659bb2;
                }
                .choose{
                    background: #489dd6;
                    color: #fff
                }
            }
        }
      }
  }
</style>
