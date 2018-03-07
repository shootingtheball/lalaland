<template>
  <div class="homepage">
      <div class="info">
          <div class="desc">
              <ul>
                  <li ><div>预计今日服务人数：<span>20</span></div></li>
                  <li><div>目前服务总人数：<span>20</span></div></li>
                  <li><div>应得报酬：<span>￥200</span></div></li>
                  <li><div>奖罚机制：？</div></li>
              </ul>
              <ul>
                  <li><div>今日已服务人数：<span>100</span></div></li>
                  <li><div>我的服务总人数：<span>20</span></div></li>
                  <li><div>应得报酬：<span>￥600</span></div></li>
                  <li><div>所授科目：<span>数学</span></div></li>
              </ul>
              <ul>
                  <li>所属小组：<span>辅导第五组</span></li>
                  <li>扣除报酬：<span>￥25</span></li>
                  <li>所授年级：<span>1-6</span></li>
                  <li>小组组长：<span>王大千</span></li>
              </ul>
          </div>
          <div class="other">温馨提示：定期与家长进行沟通</div>
      </div>
      <div class="option" @click="goto($event)">
          <ul>
              <li id="sign"><span>签到/签退</span></li>
              <li id="notice"><span>公告</span></li>
              <li><span>报酬</span></li>
              <li><span>上传所拍试卷</span></li>
          </ul>
          <ul>
              <li id="stucomment"><span>对学生的评价</span></li>
              <li><span>家长对我的评价</span></li>
              <li><span>常见问题操作手册</span></li>
              <li><span>申请帮主/管理者</span></li>
          </ul>
          <ul >
              <li><span>题库</span></li>
              <li id="stuInfo"><span>所授学生信息</span></li>
              <li id="user"><span>我的个人信息</span></li>
              <li><span>授课时间</span></li>
          </ul>
      </div>
  </div>
</template>

<script>
import {userInfo} from '@/api/index.js'

export default {
  mounted(){
    console.log(1)
  },
  methods:{
      goto(event) {
          let n = event.target.id ? event.target.id : event.target.parentNode.id;
          console.log(n)
          switch(n)
          {
              case 'user':
              this.$router.push({path:'/user'})
              break;
              case 'sign':
              this.$router.push({path:'/sign'})
              break;
              case 'notice':
              this.$router.push({path:'/notice'})
              break;
              case 'stucomment':
              this.$router.push({path:'/summary'})
              break;
          }
      }
  }
}
</script>


<style lang="less" scoped>
  .homepage{
      .info{
          background: #fff;
          padding: 20px 10px 65px 20px;
          font-size: 14px;
          .desc{
              ul{
                  display: flex;
                  justify-content: space-between;
                  li{
                      margin-top: 15px;
                      text-align: left;
                      span{
                         color: #2A58AD
                      }
                  }
                  li:nth-child(1){
                      width: 27%
                  }
                  li:nth-child(2){
                      width: 25%
                  }
                  li:nth-child(3){
                      width: 22%
                  }
                  li:nth-child(4){
                      width: 22%
                  }
              }
          }
          .other{
              color:#D0021B;
              border-top: 1px solid #979797;
              margin-top: 20px;
              padding-top: 20px;
          }
      }
      .option{
          ul{
              display: flex;
              justify-content: space-between;
          }
          li{
              position: relative;
              background: #fff;
              float: left;
              width: 19%;
              height: 0;
              padding-top: 19%;
              margin-top: 45px;
              font-size: 14px;
              border-radius: 8px;
              span{
                  display: inline-block;
                  width: 100%;
                  //height: 100%;
                  text-align: center;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%,-50%);
              }
          }
      }
  }
</style>
